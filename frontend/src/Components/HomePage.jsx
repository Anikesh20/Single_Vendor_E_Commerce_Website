import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";

const HomePage = ({ products }) => {
  const { addToCart } = useCart();
  const [message, setMessage] = useState("");

  const handleAddToCart = (product) => {
    addToCart(product);
    setMessage(`${product.name} added to cart!`);
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-blue-700 text-white p-6 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg"
              alt="Samsung Logo"
              className="h-10"
            />
            <span className="text-xl font-bold">Samsung Store</span>
          </div>
          <div className="space-x-8 text-md font-medium">
            <Link to="/" className="hover:text-yellow-300">Home</Link>
            <Link to="/about" className="hover:text-yellow-300">About</Link>
            <Link to="/contact" className="hover:text-yellow-300">Contact Us</Link>
            <Link to="/cart" className="hover:text-yellow-300">Cart</Link>
            <Link to="/login" className="hover:text-yellow-300">Login</Link>
          </div>
        </div>
      </nav>

      {/* Introduction Section */}
      <header className="bg-gradient-to-r from-blue-500 to-blue-700 py-16 text-center text-white">
        <h1 className="text-5xl font-bold">Welcome to Samsung Store</h1>
        <p className="text-lg mt-4">Explore the latest and most advanced Samsung products.</p>
      </header>

      {/* Show the confirmation message */}
      {message && (
        <div className="bg-green-500 text-white text-center py-3 mt-4">{message}</div>
      )}

      {/* Products Section */}
      <div className="container mx-auto py-12 px-6">
        {Object.entries(products).map(([category, items]) => (
          <div key={category} className="mb-16">
            <h2 className="text-4xl font-semibold text-blue-700 mb-8 capitalize">{category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {items.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300"
                >
                  <Link to={`/product/${category}/${product.id}`}>
                    <div className="relative w-full h-80">
                      <img
                        src={product.img}
                        alt={product.name}
                        className="w-full h-full object-contain object-center transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                  </Link>
                  <div className="px-6 py-4">
                    <h3 className="text-2xl font-semibold text-blue-700 hover:text-yellow-300">
                      <Link to={`/product/${category}/${product.id}`}>{product.name}</Link>
                    </h3>
                    <p className="text-lg text-gray-700 mt-2">{product.price}</p>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="mt-4 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
