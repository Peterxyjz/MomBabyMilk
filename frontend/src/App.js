import React from 'react';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import Header from "./components/Header";
import Loader from "./components/Loader";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import Breadcrumb from './components/Breadcrumb';
import OtpPage from './pages/OtpPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={
          <>
            {/* <Loader /> */}
            <Header />
            <Breadcrumb headline="Đăng Nhập" />
            <SignInPage />
          </>
        } />
        <Route path="/sign-up" element={
          <>
            {/* <Loader /> */}
            <Header />
            <Breadcrumb headline="Đăng Ký" />
            <SignUpPage />
          </>
        } />
        <Route path="/otp" element={
          <>
            {/* <Loader /> */}
            <Header />
            <Breadcrumb headline="OTP" />
            <OtpPage />
          </>
        } />
        <Route path="/forgot-password" element={
          <>
            {/* <Loader /> */}
            <Header />
            <Breadcrumb headline="Quên Mật Khẩu" />
            <ForgotPasswordPage />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
