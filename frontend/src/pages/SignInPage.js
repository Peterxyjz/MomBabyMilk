import React from 'react';
import { Link } from 'react-router-dom';
import logInImg from '../assets/images/inner-page/log-in.png';

const SignInPage = () => {
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
                <h3>Welcome To Fastkart</h3>
                <h4>Log In Your Account</h4>
              </div>

              <div className="input-box">
                <form className="row g-4">
                  <div className="col-12">
                    <div className="form-floating theme-form-floating log-in-form">
                      <input type="email" className="form-control" id="email" placeholder="Email Address" />
                      <label htmlFor="email">Email Address</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating theme-form-floating log-in-form">
                      <input type="password" className="form-control" id="password" placeholder="Password" />
                      <label htmlFor="password">Password</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="forgot-box">
                      <div className="form-check ps-0 m-0 remember-box">
                        <input className="checkbox_animated check-box" type="checkbox" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">Remember me</label>
                      </div>
                      <Link to="/forgot" className="forgot-password">Forgot Password?</Link>
                    </div>
                  </div>

                  <div className="col-12">
                    <button className="btn btn-animation w-100 justify-content-center" type="submit">Log In</button>
                  </div>
                </form>
              </div>

              <div className="other-log-in">
                <h6>or</h6>
              </div>

              <div className="log-in-button">
                <ul>
                  <li>
                    <a href="https://www.google.com/" className="btn google-button w-100">
                      <img src="../assets/images/inner-page/google.png" className="blur-up lazyload" alt="" /> Log In with Google
                    </a>
                  </li>
                </ul>
              </div>

              <div className="other-log-in">
                <h6></h6>
              </div>

              <div className="sign-up-box">
                <h4>Don't have an account?</h4>
                <Link to="/sign-up">Sign Up</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignInPage;
