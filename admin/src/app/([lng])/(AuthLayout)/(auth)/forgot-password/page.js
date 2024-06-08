"use client";
import { ReactstrapInput } from "@/Components/ReactstrapFormik";
import Btn from "@/Elements/Buttons/Btn";
// import I18NextContext from "@/Helper/I18NextContext";
import LoginBoxWrapper from "@/Utils/HOC/LoginBoxWrapper";
import { ForgotPasswordSchema,} from "@/Utils/Hooks/Auth/useForgotPassword";
// import { useTranslation } from "@/app/i18n/client";
import { Field, Form, Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { RiArrowLeftSLine } from "react-icons/ri";
import { Col } from "reactstrap";

const ForgotPassword = () => {
  const router = useRouter()
  // const { i18Lang } = useContext(I18NextContext);
  // const { t } = useTranslation(i18Lang, "common");
  return (
    <div className="box-wrapper">
      <LoginBoxWrapper>
        <div className="log-in-title">
        <Link href="/login" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none'}}>
          <RiArrowLeftSLine style={{ fontSize: '24px', marginRight: '5px' }} />
          <h8 style={{ margin: 0 }}>Về trang đăng nhập</h8>
      </Link>
          <h4>Quên mật khẩu</h4>
        </div>
        <div className="input-box">
          <Formik
            initialValues={{
              email: "",
            }}
            validationSchema={ForgotPasswordSchema}
            onSubmit={(values) => router.push(`/otp-verification`)}
          >
            {() => (
              <Form className="row g-2">
                <Col sm="12">
                  <Field
                    name="email"
                    component={ReactstrapInput}
                    className="form-control"
                    id="email"
                    placeholder="Email"
                    label="Email"
                  />
                </Col>
                <Col sm="12">
                  <Btn
                    title="Gửi email"
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
  );
};
export default ForgotPassword;
