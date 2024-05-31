import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logoImg from '../assets/images/logo/1.png'
const LoginPage = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const [errorList, setErrorList] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); 
    const { username, email, password, confirm_password } = formValues;
    console.log(username, email, password, confirm_password);
    
    await axios
      .post(`http://localhost:4000/users/login-for-admin`, {
        email,
        password,
      })
      .then((res) => {
        console.log(res);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        let user = JSON.parse(localStorage.getItem("user")) || [];
        console.log(user.username);
        navigate("/admin");
      })
      .catch((error) => {
        let errorList = [];
        console.log(error.response.data.errors);
        for (let [key, value] of Object.entries(error.response.data.errors)) {
          errorList.push(value);
          setErrorList(errorList);
        }
      });
  };

  return (
    <section className="log-in-section section-b-space">
      <a href="" className="logo-login">
        <img src={logoImg} className="img-fluid" />
      </a>
      <div className="container w-100">
        <div className="row">
          <div className="col-xl-5 col-lg-6 me-auto">
            <div className="log-in-box">
              <div className="log-in-title">
                <h3>Welcome</h3>
                <h4>Đăng nhập tài khoản</h4>
              </div>
              <div className="input-box">
                <form className="row g-4" onSubmit={handleSubmit}>
                  <div className="col-12">
                    <div className="form-floating theme-form-floating log-in-form">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formValues.email}
                        onChange={handleChange}
                        placeholder="Địa chỉ email"
                      />
                      <label htmlFor="email">Địa chỉ email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating theme-form-floating log-in-form">
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={formValues.password}
                        onChange={handleChange}
                        placeholder="Mật Khẩu"
                      />
                      <label htmlFor="password">Mật Khẩu</label>
                    </div>
                  </div>
                  {errorList.length > 0 && (
                      <div className="error-list mt-3">
                        {errorList.map((error, index) => (
                          <p key={index} className="text-danger">
                            {error}
                          </p>
                        ))}
                      </div>
                    )}
                  <div className="col-12">
                    <div className="forgot-box">
                      <div className="form-check ps-0 m-0 remember-box">
                        <input
                          className="checkbox_animated check-box"
                          type="checkbox"
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          Lưu tài khoản
                        </label>
                      </div>
                      <a href="/forgot-password" className="forgot-password">
                        Quên mật khẩu?
                      </a>
                    </div>
                  </div>
                  <div className="col-12">
                    <button
                      className="btn btn-animation w-100 justify-content-center"
                      type="submit"
                    >
                      Đăng Nhập
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
