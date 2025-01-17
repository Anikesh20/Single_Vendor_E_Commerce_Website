import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../Context/CartContext'; // Import the useCart hook

const CartPage = () => {
  const { cart, removeFromCart } = useCart(); // Get cart and removeFromCart function from the context

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

      {/* Cart Page Section */}
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold text-blue-700 mb-6">Your Cart</h1>
        {cart.length === 0 ? (
          <p className="text-gray-600 text-center">Your cart is empty.</p>
        ) : (
          <div className="space-y-6">
            {cart.map((item) => (
              <div key={item.id} className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-between">
                <div className="flex items-center">
                  <img src={item.img} alt={item.name} className="w-24 h-24 object-cover mr-6" />
                  <div>
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <p className="text-gray-600">{item.price}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="text-right mt-6">
              <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700">Proceed to Checkout</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
