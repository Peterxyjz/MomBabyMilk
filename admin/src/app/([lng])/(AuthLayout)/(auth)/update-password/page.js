"use client"
import { useContext } from "react";
import { Col } from "reactstrap";
import { ReactstrapInput } from "@/Components/ReactstrapFormik";
import Btn from "@/Elements/Buttons/Btn";
// import I18NextContext from "@/Helper/I18NextContext";
import LoginBoxWrapper from "@/Utils/HOC/LoginBoxWrapper";
import { UpdatePasswordSchema } from "@/Utils/Hooks/Auth/useUpdatePassword";
// import { useTranslation } from "@/app/i18n/client";
import { Field, Form, Formik } from "formik";
import { useRouter } from "next/navigation";

const UpdatePassword = () => {
    // const { i18Lang } = useContext(I18NextContext);
    // const { t } = useTranslation(i18Lang, 'common');
    const {router} = useRouter();
  return (
    <>
      <div className="box-wrapper">
        <LoginBoxWrapper>
          <div className="log-in-title">
            <h4>{"Đổi mật khẩu mới"}</h4>
          </div>
          <div className="input-box">
            <Formik
              initialValues={{
                password: "",
                password_confirmation: "",
              }}
              validationSchema={UpdatePasswordSchema}
              onSubmit={(values) => router.push(`/login`)}>
              {() => (
                <Form className="row g-2">
                  <Col sm="12">
                    <Field name="password" component={ReactstrapInput} type="password" className="form-control" id="password" placeholder="Nhập mật khẩu" label="Mật khẩu" />
                  </Col>
                  <Col sm="12">
                    <Field name="password_confirmation" component={ReactstrapInput} type="password" className="form-control" id="password" placeholder="Xác nhận mật khẩu" label="Xác nhận mật khẩu" />
                  </Col>
                  <Col sm="12">
                  <Btn
                    title="Quay về trang đăng nhập"
                    className="btn btn-animation w-100 justify-content-center"
                    type="submit"
                    color="false"
                  />
                  </Col>
                </Form>
              )}
            </Formik>
          </div>
        </LoginBoxWrapper>
      </div>
    </>
  );
};
export default UpdatePassword;
