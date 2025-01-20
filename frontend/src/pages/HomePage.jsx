import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { CartContext } from '../Context/CartContext'; // Import CartContext

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [fadeIn, setFadeIn] = useState(false);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]); // State for categories
  const [successMessage, setSuccessMessage] = useState(''); // State for success message

  // Use the CartContext
  const { addToCart } = useContext(CartContext);  // Get addToCart function

  // Fetch categories from backend
  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:5000/categories');
      setCategories(['All', ...response.data.map(category => category.name)]); // Add 'All' category
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  // Fetch products based on selected category
  const fetchProducts = async (category) => {
    try {
      const endpoint = category === 'All' 
        ? 'http://localhost:5000/products' 
        : `http://localhost:5000/products/${category}`;
      const response = await axios.get(endpoint);
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchCategories(); // Fetch categories on page load
    fetchProducts(selectedCategory); // Fetch products based on selected category
    setFadeIn(true); // Trigger fade-in animation
  }, [selectedCategory]);

  // Handle Add to Cart functionality
  const handleAddToCart = (product) => {
    addToCart(product);  // Call addToCart function
    setSuccessMessage(`${product.name} has been added to your cart!`); // Set success message

    // Hide success message after 3 seconds
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
  };

  return (
    <div className={`transition-opacity ${fadeIn ? 'opacity-100' : 'opacity-0'} bg-white relative`}>
      <Header />

      {/* Hero Section */}
      <div className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-white z-0" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20 z-10 transform rotate-12" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-l from-transparent via-purple-600 to-transparent opacity-20 z-10 transform rotate-6" />
        <div className="text-center relative z-20">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight drop-shadow-lg">
            Explore Samsung Products
          </h1>
          <p className="text-lg md:text-2xl mb-6 drop-shadow-md">
            Discover the latest technology and exclusive deals.
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white text-lg shadow-lg transition duration-300">
            Start Shopping
          </button>
        </div>
      </div>

      {/* Success Message */}
      {successMessage && (
        <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-green-600 text-white p-4 rounded-lg shadow-lg z-20">
          <p>{successMessage}</p>
        </div>
      )}

      {/* Categories Section */}
      <div className="my-8 px-4">
        <h2 className="text-2xl font-bold mb-4 border-b-4 border-transparent bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 pb-2">
          Categories
        </h2>
        <div className="flex flex-wrap gap-4 justify-center mt-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg text-lg font-medium transition-all duration-300 transform ${selectedCategory === category
                ? 'bg-blue-600 text-white scale-105'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Products Section */}
      <div className="mt-8 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              className="border border-gray-300 rounded-lg p-4 hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <Link to={`/product/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-md mb-4 transition-all duration-300"
                />
                <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-700 text-sm mb-4">{product.price}</p>
              </Link>
              <button
                onClick={() => handleAddToCart(product)}  // Add to Cart functionality
                className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition duration-300"
              >
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No products found for {selectedCategory}.
          </p>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
