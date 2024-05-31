import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import signUpImg from '../assets/images/inner-page/sign-up.png';
import logoGoogle from '../assets/images/inner-page/google.png'
const SignUpPage = () => {
  const navigate = useNavigate();
  // Khai báo state để lưu trữ giá trị của các input
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const [errorList, setErrorList] = useState([]);

  // Hàm xử lý khi input thay đổi
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
      .post(`http://localhost:4000/users/register`, {
        username,
        email,
        password,
        confirm_password,
      })
      .then((res) => {
        alert('Đăng ký thành công!');
        navigate("/otp");
      })
      .catch((error) => {
        let errorList = [];
        console.log(error.response);
        for (let [key, value] of Object.entries(error.response.data.errors)) {
          console.log(value); // in ra các error từ back-end trả về
          errorList.push(value);
          setErrorList(errorList);
        }
      });
  };
  return (
    <section className="log-in-section section-b-space">
      <div className="container-fluid-lg w-100">
        <div className="row">
          <div className="col-xxl-6 col-xl-5 col-lg-6 d-lg-block d-none ms-auto">
            <div className="image-contain">
              <img src={signUpImg} className="img-fluid" alt="" />
            </div>
          </div>

          <div className="col-xxl-4 col-xl-5 col-lg-6 col-sm-8 mx-auto">
            <div className="log-in-box">
              <div className="log-in-title">
                <h3>Welcome</h3>
                <h4>Tạo tài khoản mới</h4>
              </div>

              <div className="input-box">
                <form className="row g-4" onSubmit={handleSubmit}>
                  <div className="col-12">
                    <div className="form-floating theme-form-floating">
                      <input type="text" className="form-control" id="username"
                        name="username"
                        value={formValues.username}
                        onChange={handleChange}
                        placeholder="Tên Đăng Nhập" />
                      <label htmlFor="username">Tên đăng nhập</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating theme-form-floating">
                      <input type="email" className="form-control" id="email"
                        name="email"
                        value={formValues.email}
                        onChange={handleChange}
                        placeholder="Địa chỉ email" />
                      <label htmlFor="email">Địa chỉ email</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating theme-form-floating">
                      <input type="password" className="form-control" id="password"
                        name="password"
                        value={formValues.password}
                        onChange={handleChange}
                        placeholder="Nhập mật khẩu" />
                      <label htmlFor="password">Nhập mật khẩu</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating theme-form-floating">
                      <input type="password" className="form-control" id="confirm_password"
                        name="confirm_password"
                        value={formValues.confirm_password}
                        onChange={handleChange}
                        placeholder="Nhập lại mật khẩu" />
                      <label htmlFor="confirm_password">Nhập lại mật khẩu</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="forgot-box">
                      <div className="form-check ps-0 m-0 remember-box">
                        <input className="checkbox_animated check-box" type="checkbox" id="flexCheckDefault" required/>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                          Tôi đồng ý với <span>Điều khoản</span> và <span>Chính sách bảo mật</span>
                        </label>
                      </div>
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
                    <button className="btn btn-animation w-100" type="submit">Đăng ký</button>
                  </div>
                </form>
              </div>

              <div className="other-log-in">
                <h6>or</h6>
              </div>

              <div className="log-in-button">
                <ul>
                  <li>
                    <a href="#" className="btn google-button w-100">
                      <img src={logoGoogle} className="lazyload" alt="" />
                      Đăng ký bằng tài khoản Google
                    </a>
                  </li>
                </ul>
              </div>

              <div className="sign-up-box">
                <h4>Bạn đã có tài khoản?</h4>
                <Link to="/login">Đăng nhập</Link>
              </div>
            </div>
          </div>

          <div className="col-xxl-7 col-xl-6 col-lg-6"></div>
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;
