import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-xl">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-3xl font-extrabold tracking-wide">
          <Link to="/" className="hover:text-blue-200 transition duration-300 ease-in-out">
            Samsung Store
          </Link>
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <Link to="/" className="hover:text-blue-200 transition duration-300 ease-in-out">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-200 transition duration-300 ease-in-out">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-200 transition duration-300 ease-in-out">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-blue-200 transition duration-300 ease-in-out">
                Login
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-3xl">
            {isMenuOpen ? 'X' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 bg-opacity-75 p-4 rounded-lg mt-4">
          <ul className="space-y-4 text-center">
            <li>
              <Link to="/" className="hover:text-blue-200 transition duration-300 ease-in-out block">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-200 transition duration-300 ease-in-out block">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-200 transition duration-300 ease-in-out block">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-blue-200 transition duration-300 ease-in-out block">
                Login
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
