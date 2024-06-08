// "use client";
"use client";
import React, { useState, useContext } from "react";
import { Col } from "reactstrap";
import { Field, Form, Formik } from "formik";
import Link from "next/link";
import LoginBoxWrapper from "@/Utils/HOC/LoginBoxWrapper";
import { LogInSchema } from "@/Utils/Hooks/Auth/useLogin";
import Btn from "@/Elements/Buttons/Btn";
import { ReactstrapInput } from "@/Components/ReactstrapFormik";
import { useRouter } from "next/navigation";
import accountsData from "../../../../api/self/account.json";
import AccountContext from "@/Helper/AccountContext"; // Import dữ liệu từ tệp JSON

const Login = () => {
  const [error, setError] = useState("");
  const router = useRouter();
  const { setAccountData } = useContext(AccountContext); // Lấy hàm cập nhật từ AccountContext

  const handleSubmit = (values) => {
    const { email, password } = values;

    const account = accountsData.find(
      (account) => account.email === email && account.password === password
    );

    if (account) {

      localStorage.setItem("role", account.role);
      localStorage.setItem("permission", JSON.stringify(account.permissions));
      setAccountData(account);
      if (account.role.name === "admin") {
        router.push(`/dashboard`);
      }
      else if (account.role.name === "staff") {
        router.push(`/order`);
      }
    } else {
      setError("Email hoặc mật khẩu không chính xác");
    }
  };

  return (
    <div className="box-wrapper">
      <LoginBoxWrapper>
        <div className="log-in-title">
          <h3>Chào mừng quay trở lại</h3>
          <h4>Đăng nhập</h4>
        </div>
        <div className="input-box">
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={LogInSchema}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form className="row g-2">
                <Col sm="12">
                  <Field
                    name="email"
                    type="email"
                    component={ReactstrapInput}
                    className="form-control"
                    id="email"
                    placeholder="Email"
                    label="Email"
                  />
                </Col>
                <Col sm="12">
                  <Field
                    name="password"
                    component={ReactstrapInput}
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Nhập mật khẩu "
                    label="Mật khẩu"
                  />
                </Col>
                <Col sm="12">
                  <div className="forgot-box">
                    <Link href={`/forgot-password`} className="forgot-password">
                      Quên mật khẩu?
                    </Link>
                  </div>
                </Col>
                <Col sm="12">
                  <Btn
                    title="Đăng nhập"
                    className="btn btn-animation w-100 justify-content-center"
                    type="submit"
                    color="false"
                  />
                  <div className="sign-up-box">
                    {/* <h4>{'Don\'t Have Seller Account?'}</h4>
                    <Link href={`/auth/register`}>{'Sign Up'}</Link> */}
                  </div>
                </Col>
              </Form>
            )}
          </Formik>
        </div>
      </LoginBoxWrapper>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;

