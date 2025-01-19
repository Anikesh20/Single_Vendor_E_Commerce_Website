import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [categories] = useState([
    'Mobile', 'TVs', 'Tablets', 'Washing_Machines', 'Audio',
    'Appliances', 'Monitors', 'Wearables', 'Air_Conditioning', 'Kitchen',
  ]);
  const [selectedCategory, setSelectedCategory] = useState('Mobile');
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: '', price: '', image: '' });
  const [messages, setMessages] = useState([]);

  // Fetch products dynamically based on the selected category
  const fetchProducts = async (category) => {
    try {
      const response = await axios.get(`http://localhost:5000/products/${category}`);
      const fetchedProducts = response.data;

      // Save fetched products to localStorage
      localStorage.setItem(`products_${category}`, JSON.stringify(fetchedProducts));

      // Set state to fetched products
      setProducts(fetchedProducts);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  // Fetch messages from users
  const fetchMessages = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/messages');
      setMessages(response.data); // Store retrieved messages
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  // Initialize products from localStorage if available
  useEffect(() => {
    const savedProducts = localStorage.getItem(`products_${selectedCategory}`);
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    } else {
      fetchProducts(selectedCategory);
    }

    fetchMessages(); // Fetch user messages on component mount
  }, [selectedCategory]);

  // Handle Add Product
  const handleAddProduct = async () => {
    try {
      await axios.post(`http://localhost:5000/products/${selectedCategory}`, form);
      fetchProducts(selectedCategory);
      setForm({ name: '', price: '', image: '' });
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  // Handle Delete Product
  const handleDeleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/products/${selectedCategory}/${id}`);
      fetchProducts(selectedCategory);
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  // Handle Update Product
  const handleUpdateProduct = async (id, updatedProduct) => {
    try {
      await axios.put(`http://localhost:5000/products/${selectedCategory}/${id}`, updatedProduct);
      fetchProducts(selectedCategory);
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <div className="p-6 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 min-h-screen text-white">
      <h1 className="text-4xl font-bold text-center mb-8">Admin Dashboard</h1>

      {/* Category Dropdown and Add Product Button */}
      <div className="mb-6 flex justify-between items-center">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="bg-white text-gray-700 p-3 rounded-lg shadow-md transition-transform duration-300"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <button
          onClick={handleAddProduct}
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
        >
          Add Product
        </button>
      </div>

      {/* Products Table */}
      <div className="mb-8 bg-white p-6 rounded-lg shadow-lg overflow-x-auto">
        <h2 className="text-3xl font-semibold mb-6">Products in {selectedCategory}</h2>

        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gradient-to-r from-green-400 to-blue-500 text-white">
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Price</th>
              <th className="py-3 px-6 text-left">Image URL</th>
              <th className="py-3 px-6 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((product) => (
                <tr key={product.id} className="border-b hover:bg-gray-400">
                  <td className="text-black py-3 px-6">{product.name}</td>
                  <td className="text-black py-3 px-6">{product.price}</td>
                  <td className="text-black py-3 px-6">{product.image}</td>
                  <td className="text-black py-3 px-6 flex gap-2">
                    <button
                      onClick={() => handleDeleteProduct(product.id)}
                      className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600 transition-all duration-200"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => handleUpdateProduct(product.id, { ...product, price: product.price + 10 })}
                      className="bg-yellow-500 text-white py-1 px-3 rounded-lg hover:bg-yellow-600 transition-all duration-200"
                    >
                      Update Price
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="py-3 px-6 text-center text-gray-500">
                  No products available in this category.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Add New Product Form */}
      <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Add a New Product</h2>
        <input
          type="text"
          placeholder="Product Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full text-black p-3 mb-4 rounded-lg border shadow-md"
        />
        <input
          type="text"
          placeholder="Price"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          className="w-full text-black p-3 mb-4 rounded-lg border shadow-md"
        />
        <input
          type="text"
          placeholder="Image URL"
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
          className="w-full text-black p-3 mb-4 rounded-lg border shadow-md"
        />
        <button
          onClick={handleAddProduct}
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-all duration-300"
        >
          Add Product
        </button>
      </div>

      {/* User Messages Section */}
      <div className="mt-12 bg-white p-6 rounded-lg shadow-lg overflow-x-auto">
        <h2 className="text-3xl font-semibold mb-6">User Messages</h2>

        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Phone</th>
              <th className="py-3 px-6 text-left">Message</th>
            </tr>
          </thead>
          <tbody>
            {messages.length > 0 ? (
              messages.map((message) => (
                <tr key={message.id} className="border-b hover:bg-gray-200">
                  <td className="text-black py-3 px-6">{message.name}</td>
                  <td className="text-black py-3 px-6">{message.email}</td>
                  <td className="text-black py-3 px-6">{message.phone}</td>
                  <td className="text-black py-3 px-6">{message.message}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="py-3 px-6 text-center text-gray-500">
                  No messages from users.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
