import React from 'react';
import Header from './Header';
import Footer from './Footer';

const AboutUs = () => {
  return (
    <div className="bg-white relative overflow-hidden">
      <Header />

      {/* Abstract Strokes */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Top-left diagonal stroke */}
        <div className="absolute top-0 left-0 w-full h-1/3">
          <div className="w-full h-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-10 blur-3xl transform -rotate-6 origin-top-left"></div>
        </div>
        {/* Bottom-right diagonal stroke */}
        <div className="absolute bottom-0 right-0 w-full h-1/3">
          <div className="w-full h-full bg-gradient-to-r from-green-400 to-blue-500 opacity-10 blur-3xl transform rotate-6 origin-bottom-right"></div>
        </div>
        {/* Vertical stroke (center-left) */}
        <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-400 to-purple-500 opacity-20 blur-2xl"></div>
        {/* Horizontal stroke (center-bottom) */}
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-teal-400 to-green-400 opacity-20 blur-2xl"></div>
      </div>

      <div className="relative z-10">
        {/* Page Content */}
        <div className="px-4 py-16 lg:px-16">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-6 text-center">
            About Us
          </h1>
          <p className="text-lg md:text-2xl text-gray-600 text-center leading-relaxed max-w-3xl mx-auto">
            Welcome to the Samsung Store! We are your one-stop destination for cutting-edge Samsung products, from smartphones to smart home appliances. Our mission is to bring you the latest technology with exceptional service, ensuring a seamless shopping experience.
          </p>
        </div>

        {/* Core Values Section */}
        <div className="px-4 py-16 lg:px-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 border rounded-lg shadow-lg hover:shadow-2xl transition">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                Innovation
              </h3>
              <p className="text-gray-600">
                We constantly innovate to create new opportunities and deliver better solutions to our customers.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-lg hover:shadow-2xl transition">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                Customer Focus
              </h3>
              <p className="text-gray-600">
                Your satisfaction is our priority. We strive to meet and exceed your expectations at every step.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-lg hover:shadow-2xl transition">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                Sustainability
              </h3>
              <p className="text-gray-600">
                We are committed to sustainable practices, ensuring a better future for generations to come.
              </p>
            </div>
          </div>
        </div>

        {/* Meet Our Developers Section */}
        <div className="px-4 py-16 lg:px-16 bg-gray-50">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Meet Our Developers
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex flex-col items-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Developer"
                className="w-32 h-32 rounded-full mb-4 shadow-lg"
              />
              <h3 className="text-lg font-semibold text-gray-700">
                Developer 1
              </h3>
              <p className="text-sm text-gray-500">Full Stack Developer</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Developer"
                className="w-32 h-32 rounded-full mb-4 shadow-lg"
              />
              <h3 className="text-lg font-semibold text-gray-700">
                Developer 2
              </h3>
              <p className="text-sm text-gray-500">UI/UX Designer</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Developer"
                className="w-32 h-32 rounded-full mb-4 shadow-lg"
              />
              <h3 className="text-lg font-semibold text-gray-700">
                Developer 3
              </h3>
              <p className="text-sm text-gray-500">Frontend Engineer</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
