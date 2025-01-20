import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [categoryForm, setCategoryForm] = useState({ name: '' });
  const [productForm, setProductForm] = useState({ name: '', price: '', image: '' });

  // Fetch categories and their products
  const fetchCategoriesWithProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/categories-with-products');
      setCategories(response.data);
      if (response.data.length > 0) {
        setSelectedCategory(response.data[0].id);
        setProducts(response.data[0].products || []);
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  useEffect(() => {
    fetchCategoriesWithProducts();
  }, []);

  // Handle Category Selection
  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    const selected = categories.find((category) => category.id === parseInt(categoryId, 10));
    setProducts(selected?.products || []);
  };

  // Add New Category
  const handleAddCategory = async () => {
    try {
      await axios.post('http://localhost:5000/categories', categoryForm);
      fetchCategoriesWithProducts();
      setCategoryForm({ name: '' });
    } catch (error) {
      console.error('Error adding category:', error);
    }
  };

  // Delete Category
  const handleDeleteCategory = async (categoryId) => {
    try {
      await axios.delete(`http://localhost:5000/categories/${categoryId}`);
      fetchCategoriesWithProducts();
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };

  // Add Product to Selected Category
  const handleAddProduct = async () => {
    try {
      await axios.post(`http://localhost:5000/categories/${selectedCategory}/products`, productForm);
      fetchCategoriesWithProducts();
      setProductForm({ name: '', price: '', image: '' });
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  // Delete Product
  const handleDeleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:5000/categories/${selectedCategory}/products/${productId}`);
      fetchCategoriesWithProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  // Update Product
  const handleUpdateProduct = async (productId, updatedProduct) => {
    try {
      await axios.put(`http://localhost:5000/categories/${selectedCategory}/products/${productId}`, updatedProduct);
      fetchCategoriesWithProducts();
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <div className="p-6 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 min-h-screen text-white">
      <h1 className="text-4xl font-bold text-center mb-8">Admin Dashboard</h1>

      {/* Manage Categories */}
      <div className="mb-6 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-black">Manage Categories</h2>
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="New Category Name"
            value={categoryForm.name}
            onChange={(e) => setCategoryForm({ name: e.target.value })}
            className="flex-1 p-3 rounded-lg border border-gray-300 text-black"
          />
          <button
            onClick={handleAddCategory}
            className="bg-green-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-600"
          >
            Add Category
          </button>
        </div>
        <ul className="mt-4">
          {categories.map((category) => (
            <li key={category.id} className="flex justify-between items-center py-2 border-b text-black">
              <span>{category.name}</span>
              <button
                onClick={() => handleDeleteCategory(category.id)}
                className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Manage Products */}
      <div className="mb-6 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-black">Manage Products</h2>
        <select
          value={selectedCategory || ''}
          onChange={(e) => handleCategoryChange(e.target.value)}
          className="mb-4 w-full p-3 rounded-lg border border-gray-300 text-black"
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Product Name"
            value={productForm.name}
            onChange={(e) => setProductForm({ ...productForm, name: e.target.value })}
            className="w-full p-3 mb-2 rounded-lg border border-gray-300 text-black"
          />
          <input
            type="text"
            placeholder="Product Price"
            value={productForm.price}
            onChange={(e) => setProductForm({ ...productForm, price: e.target.value })}
            className="w-full p-3 mb-2 rounded-lg border border-gray-300 text-black"
          />
          <input
            type="text"
            placeholder="Product Image URL"
            value={productForm.image}
            onChange={(e) => setProductForm({ ...productForm, image: e.target.value })}
            className="w-full p-3 mb-2 rounded-lg border border-gray-300 text-black"
          />
          <button
            onClick={handleAddProduct}
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600"
          >
            Add Product
          </button>
        </div>
        <div>
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product.id} className="flex justify-between items-center py-2 border-b text-black">
                <div>
                  <p className="font-bold">{product.name}</p>
                  <p>${product.price}</p>
                  <p className="italic">{product.image}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleDeleteProduct(product.id)}
                    className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() =>
                      handleUpdateProduct(product.id, { ...product, price: product.price + 10 })
                    }
                    className="bg-yellow-500 text-white py-1 px-3 rounded-lg hover:bg-yellow-600"
                  >
                    Update Price
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No products available in this category.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
