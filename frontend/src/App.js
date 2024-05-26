import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import AdminHomePage from "./pages/AdminHomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/siginIn" element={<SignInPage />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/admin" element={<AdminHomePage/>} />
      </Routes>
    </Router>
  );
}

export default App;
