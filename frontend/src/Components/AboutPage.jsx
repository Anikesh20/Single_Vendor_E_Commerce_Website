import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../Assets/Yogesh.jpg';

const AboutPage = () => {
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

      {/* Samsung Store Description Section */}
      <div className="bg-blue-100 py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">About Samsung Store</h1>
          <p className="text-lg text-gray-700 mb-6">
            Samsung Store is your premier destination for the latest and most innovative Samsung products. From cutting-edge smartphones and versatile tablets to high-definition TVs and efficient home appliances, we provide a comprehensive selection designed to meet your every need. Our commitment to excellence extends beyond our products to include unmatched customer service and competitive pricing, ensuring you have an exceptional shopping experience every time you visit. Discover the future of technology and bring home the best of Samsung with us.
          </p>
        </div>
      </div>

      {/* Developer Team Section */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-6">Meet Our Developers</h2>
          <p className="text-lg text-gray-700 mb-6">
            Our website is crafted by a dedicated team of developers who are committed to delivering a seamless and enjoyable user experience. Meet the talent behind our success:
          </p>
          <div className="flex justify-center space-x-12">
            {/* Developer 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://media.licdn.com/dms/image/v2/D4D35AQHFOnvRYzoGGg/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1725891536375?e=1737709200&v=beta&t=Et7YQ1gltKOU_cRxMHD9wcKKT9qzdGqieCJX5uHk6z0"
                alt="Anikesh Kumar Singh"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-700">Anikesh Kumar Singh</h3>
              <p className="text-gray-700">Backend Developer</p>
            </div>
            {/* Developer 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://media.licdn.com/dms/image/v2/D4D03AQHN9dqAsGn0IQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1732540801113?e=1742428800&v=beta&t=oU3y8So4vqgUBwzsRNiB8J5lIsp1_-W98cyC48XNrB8"
                alt="Manish Bista"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-700">Manish Bista</h3>
              <p className="text-gray-700">Frontend Developer</p>
            </div>
            {/* Developer 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src={Image}
                alt="Yogesh Deshar"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-700">Yogesh Deshar</h3>
              <p className="text-gray-700">UI/UX Designer</p>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Reviews Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-6">What Our Customers Say</h2>
          <div className="flex justify-center space-x-12">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-72">
              <p className="text-gray-700 mb-4">
                "I had an amazing shopping experience! The website is so easy to use and the customer service is fantastic!"
              </p>
              <div className="flex justify-center mb-4">
                <span className="text-yellow-500">★★★★★</span>
              </div>
              <p className="font-semibold text-blue-700">Sarah Lee</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-72">
              <p className="text-gray-700 mb-4">
                "Samsung products are top-notch. The store had everything I needed, and I couldn't be happier with my purchase."
              </p>
              <div className="flex justify-center mb-4">
                <span className="text-yellow-500">★★★★★</span>
              </div>
              <p className="font-semibold text-blue-700">David Kim</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-72">
              <p className="text-gray-700 mb-4">
                "Great customer support and fast shipping. I'll definitely be back for more!"
              </p>
              <div className="flex justify-center mb-4">
                <span className="text-yellow-500">★★★★★</span>
              </div>
              <p className="font-semibold text-blue-700">Emily Johnson</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
