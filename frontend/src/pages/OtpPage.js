import React, { useState } from 'react'
import imgne from '../assets/images/inner-page/otp.png'
import { json, useNavigate } from 'react-router-dom';
import axios from "axios";
const OtpPage = () => {
    const user = JSON.parse(localStorage.getItem("user")||'')
    const user_id = user.user_id.toString()

    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({
        first: '',
        second: '',
        third: '',
        fourth: '',
        fifth: '',
        sixth: '',
    });
    const [errorList, setErrorList] = useState([]);
    const [message, setMessage] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const otp = `${formValues.first}${formValues.second}${formValues.third}${formValues.fourth}${formValues.fifth}${formValues.sixth}`;
        await axios
            .get(`http://localhost:4000/users/verify-email?email_verify_token=${otp}&user_id=${user_id}`)
            .then((res) => {
                console.log(res);
                localStorage.setItem('user', JSON.stringify(res.data.user));
                let user = JSON.parse(localStorage.getItem('user')) || [];
                console.log(user.username);
                navigate('/');
            })
            .catch((error) => {
                let errorList = [];
                console.log(error);
                // for (let [key, value] of Object.entries(error.data.errors)) {
                //     errorList.push(value);
                //     setErrorList(errorList);
                // }
            });
    };

    const resendOtp = async () => {
        await axios
            .post('http://localhost:4000/users/resend-otp', { email: 'user@example.com' })
            .then((res) => {
                setMessage('OTP đã được gửi lại!');
            })
            .catch((error) => {
                console.error('Lỗi khi gửi lại OTP:', error);
            });
    };
    return (
        <div>
            <section className="log-in-section otp-section section-b-space">
                <div className="container-fluid-lg">
                    <div className="row">
                        <div className="col-xxl-6 col-xl-5 col-lg-6 d-lg-block d-none ms-auto">
                            <div className="image-contain">
                                <img
                                    src={imgne}
                                    className="img-fluid"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-5 col-lg-6 col-sm-8 mx-auto">
                            <div className="d-flex align-items-center justify-content-center h-100">
                                <div className="log-in-box">
                                    <div className="log-in-title">
                                        <h3 className="text-title">
                                            Vui lòng nhập mã OTP để xác minh tài khoản của bạn
                                        </h3>
                                        <h5 className="text-content">
                                            Một mã đã được gửi đến <span>Email</span>
                                        </h5>

                                    </div>
                                    <form onSubmit={handleSubmit}>
                                        <div className="inputs d-flex flex-row justify-content-center">
                                            <input
                                                className="text-center form-control rounded"
                                                type="text"
                                                id="first"
                                                name="first"
                                                value={formValues.first}
                                                onChange={handleChange}
                                                maxLength={1}
                                                placeholder={0}
                                            />
                                            <input
                                                className="text-center form-control rounded"
                                                type="text"
                                                id="second"
                                                name="second"
                                                value={formValues.second}
                                                onChange={handleChange}
                                                maxLength={1}
                                                placeholder={0}
                                            />
                                            <input
                                                className="text-center form-control rounded"
                                                type="text"
                                                id="third"
                                                name="third"
                                                value={formValues.third}
                                                onChange={handleChange}
                                                maxLength={1}
                                                placeholder={0}
                                            />
                                            <input
                                                className="text-center form-control rounded"
                                                type="text"
                                                id="fourth"
                                                name="fourth"
                                                value={formValues.fourth}
                                                onChange={handleChange}
                                                maxLength={1}
                                                placeholder={0}
                                            />
                                            <input
                                                className="text-center form-control rounded"
                                                type="text"
                                                id="fifth"
                                                name="fifth"
                                                value={formValues.fifth}
                                                onChange={handleChange}
                                                maxLength={1}
                                                placeholder={0}
                                            />
                                            <input
                                                className="text-center form-control rounded"
                                                type="text"
                                                id="sixth"
                                                name="sixth"
                                                value={formValues.sixth}
                                                onChange={handleChange}
                                                maxLength={1}
                                                placeholder={0}
                                            />
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
                                        <div className="send-box pt-4">
                                            <h5>
                                                Bạn không nhận được mã?{"   "}
                                                <a href="#" className="theme-color fw-bold">
                                                    Gửi lại
                                                </a>
                                            </h5>
                                        </div>
                                        <button
                                            className="btn btn-animation w-100 mt-3"
                                            type="submit"
                                        >
                                            Xác Thực
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default OtpPage