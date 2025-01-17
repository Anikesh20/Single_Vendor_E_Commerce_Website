import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Login from "./Components/Login";
import ForgotPassword from "./Components/ForgotPassword";
import SignIn from "./Components/SignIn"; 
import Contact from "./Components/Contact";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/signup" element={<SignIn />} /> 
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
