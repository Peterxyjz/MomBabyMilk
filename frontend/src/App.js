import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import HomePage from "./pages/HomePage";
import BreadcrumbSignIn from "./components/BreadcrumbSignIn";
import BreadcrumbSignUp from "./components/BreadcrumbSignUp";
import BreadcrumbForgotPassword from "./components/BreadcrumbForgotPassword";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import Header from "./components/Header";
import Loader from "./components/Loader";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={
          <>
            {/* <Loader /> */}
            <Header />
            <BreadcrumbSignIn />
            <SignInPage />
          </>
        } />
        <Route path="/sign-up" element={
          <>
            {/* <Loader /> */}
            <Header />
            <BreadcrumbSignUp />
            <SignUpPage />
          </>
        } />
        <Route path="/forgot-password" element={
          <>
            {/* <Loader /> */}
            <Header />
            <BreadcrumbForgotPassword />
            <ForgotPasswordPage />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
