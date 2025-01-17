import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../Assets/contact.jpg';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    feedback: '',
    problem: '',
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: '' });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required.';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Valid email is required.';
    if (!formData.address.trim()) errors.address = 'Address is required.';
    if (!formData.feedback.trim()) errors.feedback = 'Feedback is required.';
    if (!formData.problem.trim()) errors.problem = 'Please describe your problem.';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    alert('Thank you! Your problem has been submitted.');
    setFormData({ name: '', email: '', address: '', feedback: '', problem: '' });
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-blue-700 text-white p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg"
              alt="Samsung Logo"
              className="h-8"
            />
            <span className="text-lg font-bold">Samsung Store</span>
          </div>
          <div className="space-x-6 text-sm font-medium">
            <Link to="/" className="hover:text-yellow-300">Home</Link>
            <Link to="/about" className="hover:text-yellow-300">About</Link>
            <Link to="/contact" className="hover:text-yellow-300">Contact Us</Link>
            <Link to="/cart" className="hover:text-yellow-300">Add to Cart</Link>
            <Link to="/signup" className="hover:text-yellow-300">Sign Up</Link>
          </div>
        </div>
      </nav>

      {/* Contact Form Section */}
      <div
        className="h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundColor: '#f4f4f4',
        }}
      >
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Contact Us</h1>
          <form onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="mb-4">
              <label htmlFor="name" className="block font-semibold mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-lg ${formErrors.name ? 'border-red-500' : 'border-gray-300'}`}
              />
              {formErrors.name && <p className="text-red-500 text-sm">{formErrors.name}</p>}
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label htmlFor="email" className="block font-semibold mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-lg ${formErrors.email ? 'border-red-500' : 'border-gray-300'}`}
              />
              {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
            </div>

            {/* Address Field */}
            <div className="mb-4">
              <label htmlFor="address" className="block font-semibold mb-2">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-lg ${formErrors.address ? 'border-red-500' : 'border-gray-300'}`}
              />
              {formErrors.address && <p className="text-red-500 text-sm">{formErrors.address}</p>}
            </div>

            {/* Feedback Field */}
            <div className="mb-4">
              <label htmlFor="feedback" className="block font-semibold mb-2">Feedback</label>
              <textarea
                id="feedback"
                name="feedback"
                value={formData.feedback}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-lg ${formErrors.feedback ? 'border-red-500' : 'border-gray-300'}`}
              ></textarea>
              {formErrors.feedback && <p className="text-red-500 text-sm">{formErrors.feedback}</p>}
            </div>

            {/* Problem Field */}
            <div className="mb-4">
              <label htmlFor="problem" className="block font-semibold mb-2">Problem Description</label>
              <textarea
                id="problem"
                name="problem"
                value={formData.problem}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-lg ${formErrors.problem ? 'border-red-500' : 'border-gray-300'}`}
              ></textarea>
              {formErrors.problem && <p className="text-red-500 text-sm">{formErrors.problem}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
