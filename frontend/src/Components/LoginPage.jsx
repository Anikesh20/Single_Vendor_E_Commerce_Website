import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
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
            <Link to="/cart" className="hover:text-yellow-300">Cart</Link>
            <Link to="/login" className="hover:text-yellow-300">Login</Link>
          </div>
        </div>
      </nav>

      {/* Login Page Content */}
      <div
        className="h-screen bg-cover bg-center"
        style={{ backgroundImage: 'url("https://via.placeholder.com/1500x900")' }} // Add your background image URL here
      >
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-80">
            <h2 className="text-2xl font-semibold text-center text-blue-700">Login to Samsung Store</h2>
            <form className="mt-6">
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-600">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-600">Password</label>
                <input
                  type="password"
                  id="password"
                  className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
                  placeholder="Enter your password"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Login
              </button>
            </form>
            <div className="text-center mt-4">
              <p className="text-gray-600">Don't have an account? <Link to="/signup" className="text-blue-600 hover:underline">Sign Up</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
