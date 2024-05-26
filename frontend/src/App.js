import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/siginIn" element={<SignInPage />} />
        <Route path="/signUo" element={<SignUpPage />} />
      </Routes>
    </Router>
  );
}

export default App;
