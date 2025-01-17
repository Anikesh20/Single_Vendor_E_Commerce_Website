// src/Components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-12">
      <div className="container mx-auto text-center">
        <p>&copy; 2025 Samsung Store. All rights reserved.</p>
        <p>
          Follow us on{' '}
          <a
            href="https://www.facebook.com"
            className="text-blue-500 hover:underline"
          >
            Facebook
          </a>
          ,{' '}
          <a
            href="https://www.twitter.com"
            className="text-blue-500 hover:underline"
          >
            Twitter
          </a>
          , and{' '}
          <a
            href="https://www.instagram.com"
            className="text-blue-500 hover:underline"
          >
            Instagram
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
