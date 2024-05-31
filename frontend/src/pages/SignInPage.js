import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import logInImg from '../assets/images/inner-page/log-in.png';
import logoGoogle from '../assets/images/inner-page/google.png'
const SignInPage = () => {
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
      .post(`http://localhost:4000/users/login`, {
        email,
        password,
      })
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        let user = JSON.parse(localStorage.getItem("user")) || [];
        console.log(user.username);
        navigate("/");
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
    <section className="log-in-section background-image-2 section-b-space">
      <div className="container-fluid-lg w-100">
        <div className="row">
          <div className="col-xxl-6 col-xl-5 col-lg-6 d-lg-block d-none ms-auto">
            <div className="image-contain">
              <img src={logInImg} className="img-fluid" alt="" />
            </div>
          </div>

          <div className="col-xxl-4 col-xl-5 col-lg-6 col-sm-8 mx-auto">
            <div className="log-in-box">
              <div className="log-in-title">
                <h3>Chào mừng đến với MomBabyMilk</h3>
                <h4>Đăng nhập tài khoản của bạn</h4>
              </div>

              <div className="input-box">
                <form className="row g-4" onSubmit={handleSubmit}>
                  <div className="col-12">
                    <div className="form-floating theme-form-floating log-in-form">
                      <input type="email" className="form-control" id="email" 
                      name="email"
                      value={formValues.email}
                      onChange={handleChange}
                      placeholder="Địa chỉ email" />
                      <label htmlFor="email">Địa chỉ email</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating theme-form-floating log-in-form">
                      <input type="password" className="form-control" id="password" 
                      name="password"
                      value={formValues.password}
                      onChange={handleChange}
                      placeholder="Mật khẩu" />
                      <label htmlFor="password">Mật khẩu</label>
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
                        <input className="checkbox_animated check-box" type="checkbox" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">Ghi nhớ đăng nhập</label>
                      </div>
                      <Link to="/forgot-password" className="forgot-password">Quên mật khẩu?</Link>
                    </div>
                  </div>

                  <div className="col-12">
                    <button className="btn btn-animation w-100 justify-content-center" type="submit">Đăng nhập</button>
                  </div>
                </form>
              </div>

              <div className="other-log-in">
                <h6>hoặc</h6>
              </div>

              <div className="log-in-button">
                <ul>
                  <li>
                    <a href="#" className="btn google-button w-100">
                      <img src={logoGoogle} className="lazyload" alt="" /> Đăng nhập bằng Google
                    </a>
                  </li>
                </ul>
              </div>

              <div className="sign-up-box">
                <h4>Bạn chưa có tài khoản?</h4>
                <Link to="/sign-up">Đăng ký</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignInPage;
