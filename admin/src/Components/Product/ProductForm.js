import React, { useCallback, useContext, useEffect, useState } from "react";
// import { useTranslation } from "@/app/i18n/client";
import { useQuery } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import { Row, Col, Card } from "reactstrap";
import { ProductTabTitleListData } from "../../Data/TabTitleListData";
import FormBtn from "../../Elements/Buttons/FormBtn";
import request from "../../Utils/AxiosUtils";
import { product } from "../../Utils/AxiosUtils/API";
import { YupObject, nameSchema } from "../../Utils/Validation/ValidationSchemas";
import Loader from "../CommonComponent/Loader";
import TabTitle from "../Coupon/TabTitle";
import { ProductInitValues, ProductValidationSchema } from "./ProductObjects";
import ProductSubmitFunction from "./ProductSubmitFunction";
import SettingContext from "../../Helper/SettingContext";
import AllProductTabs from "./AllProductTabs";
// import I18NextContext from "@/Helper/I18NextContext";
import { useRouter } from "next/navigation";
import SimpleInputField from "../InputFields/SimpleInputField";
import DescriptionInput from "./DescriptionInput";
import SearchableSelectInput from "../InputFields/SearchableSelectInput";
import FileUploadBrowser from "../InputFields/FileUploadBrowser";
import FileUploadField from "../InputFields/FileUploadField";
import { getHelperText } from "@/Utils/CustomFunctions/getHelperText";

const ProductForm = ({ setResetKey, updateId, title }) => {
  // const { i18Lang } = useContext(I18NextContext);
  // const { t } = useTranslation(i18Lang, 'common');
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("1");
  const { state } = useContext(SettingContext)
  const { data: oldData, isLoading: oldDataLoading, refetch, status } = useQuery([updateId], () => request({ url: `${product}/${updateId}` }), { refetchOnWindowFocus: false, enabled: false, select: (data) => data.data });
  useEffect(() => {
    if (updateId) {
      refetch();
    }
  }, [updateId]);
  const watchEvent = useCallback((oldData, updateId) => {
    return ProductInitValues(oldData, updateId)
  }, [oldData, updateId])

  if ((updateId && oldDataLoading)) return <Loader />;
  return (
    <Formik
      initialValues={{ ...watchEvent(oldData, updateId) }}
      validationSchema={YupObject({
        ...ProductValidationSchema,
        store_id: state?.isMultiVendor && nameSchema
      })}
      onSubmit={(values) => {
        if (updateId) {
          values["_method"] = "put"
        }
        ProductSubmitFunction(null, values, updateId);
        setResetKey(true)
        router.push(`/product`)
      }}>
      {({ values, setFieldValue, errors, touched }) => (
        <Form className="theme-form theme-form-2 mega-form vertical-tabs">
          <Row>
            <Col>
              <Card>
                <div className="title-header option-title">
                  <h5>{title}</h5>
                </div>
                <Row className="justify-content-center">
                  <Col md={10} className="mx-auto">
                    <SimpleInputField
                      nameList={[
                        { name: "Tên sản phẩm", require: "true", placeholder: "Nhập tên" },
                      ]}
                    />
                    <SearchableSelectInput
                      nameList={[
                        {
                          name: "Hãng",
                          require: "true",
                          inputprops: {
                            name: "type",
                            id: "type",
                            options: [
                              { id: "bimbosan", name: "Bimbosan" },
                              { id: "nutifood", name: "Nutifood" },
                              { id: "th", name: "TH" },
                              { id: "nestle", name: "Nestle" },
                            ],
                          },
                        },
                      ]}
                    />

                    <SearchableSelectInput
                      nameList={[
                        {
                          name: "Phân loại",
                          require: "true",
                          inputprops: {
                            name: "type",
                            id: "type",
                            options: [
                              { id: "suabot", name: "Sữa bột" },
                              { id: "suaphasan", name: "Sữa pha sẵn" },
                              { id: "suamebau", name: "Sữa cho mẹ bầu" },
                              { id: "suatuoi", name: "Sữa tươi" },
                            ],
                          },
                        },
                      ]}
                    />

                    <SimpleInputField nameList={[
                      { name: "giá", type: "number", placeholder: "Nhập đơn giá", require: "true" },
                      { name: "giảm giá", type: "number", placeholder: "Nhập mức giảm giá (%)", require: "false", min: 0, max: 100, step: "0.01" }]} />

                    <DescriptionInput values={values} setFieldValue={setFieldValue} title={'Mô tả sản phẩm'} nameKey="description" errorMessage={"Mô tả không được để trống"} />

                    <FileUploadField errors={errors} name="product_thumbnail_id" id="product_thumbnail_id" title="Hình sản phẩm" type="file"  multiple={true} values={values} setFieldValue={setFieldValue} updateId={updateId} helpertext={getHelperText('700x700px')} />
                    <FormBtn />
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Form>
      )
      }
    </Formik >
  );
};

export default ProductForm;