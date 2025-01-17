import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faGithub,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-10">
      <div className="container mx-auto px-4 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="col-span-2">
            <div className="flex items-center mb-4">
              {/* Placeholder Logo */}
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <h3 className="ml-2 text-xl font-semibold">Samsung Store</h3>
            </div>
            <p className="text-gray-400">
              Making the world a better place through cutting-edge technology and innovation.
            </p>
            <div className="flex space-x-4 mt-4">
              {/* Social Icons */}
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center bg-gray-700 hover:bg-blue-500 rounded-full transition"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center bg-gray-700 hover:bg-pink-500 rounded-full transition"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center bg-gray-700 hover:bg-blue-400 rounded-full transition"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center bg-gray-700 hover:bg-gray-500 rounded-full transition"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center bg-gray-700 hover:bg-red-500 rounded-full transition"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/about" className="hover:text-white">
                  Marketing
                </a>
              </li>
              <li>
                <a href="/analytics" className="hover:text-white">
                  Analytics
                </a>
              </li>
              <li>
                <a href="/automation" className="hover:text-white">
                  Automation
                </a>
              </li>
              <li>
                <a href="/commerce" className="hover:text-white">
                  Commerce
                </a>
              </li>
              <li>
                <a href="/insights" className="hover:text-white">
                  Insights
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button className="hover:text-white">
                  Submit Ticket
                </button>
              </li>
              <li>
                <button className="hover:text-white">
                  Documentation
                </button>
              </li>
              <li>
                <button className="hover:text-white">
                  Guides
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button className="hover:text-white">
                  About
                </button>
              </li>
              <li>
                <button className="hover:text-white">
                  Blog
                </button>
              </li>
              <li>
                <button className="hover:text-white">
                  Jobs
                </button>
              </li>
              <li>
                <button className="hover:text-white">
                  Press
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 text-center text-gray-500 text-sm border-t border-gray-700 pt-4">
          &copy; 2025 Samsung Store. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
