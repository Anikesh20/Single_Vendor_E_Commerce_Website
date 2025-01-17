import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Components/Homepage";
import Login from "./Components/Login";
import ForgotPassword from "./Components/ForgotPassword";
import SignIn from "./Components/SignIn"; 
import Contact from "./Components/Contact";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/signup" element={<SignIn />} /> 
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
