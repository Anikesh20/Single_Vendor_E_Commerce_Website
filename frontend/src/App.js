import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Login from "./Components/Login";
import ForgotPassword from "./Components/ForgotPassword";
import SignIn from "./Components/SignIn"; 
import Contact from "./Components/Contact";
import AboutUs from "./Components/AboutUs";
import AdminDashboard from "./Components/AdminDashboard";
import AdminPage from "./Components/AdminPage";
import ProductDetailPage from "./Components/ProductDetailPage";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/signup" element={<SignIn />} /> 
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/product/:id" component={ProductDetailPage} />
      </Routes>
    </Router>
  );
};

export default App;
