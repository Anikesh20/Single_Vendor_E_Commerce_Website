import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";

const ProductDetail = ({ products }) => {
  const { category, id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = products[category]?.find((item) => item.id === parseInt(id));

  if (!product) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold text-red-500">Product Not Found</h2>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="relative w-full flex justify-center items-center">
          <img
            src={product.img}
            alt={product.name}
            className="w-full max-w-md h-auto rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-blue-700">{product.name}</h1>
          <p className="text-xl text-gray-700 font-semibold">{product.price}</p>
          
          {/* Product Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-blue-600">Product Description</h3>
            <p className="text-gray-600">{product.description || "No description available. Please check product specifications for more details."}</p>
          </div>

          {/* Product Specifications */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-blue-600">Specifications</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li><strong>Storage:</strong> {product.specifications?.storage || "128 GB"}</li>
              <li><strong>RAM:</strong> {product.specifications?.ram || "6 GB"}</li>
              <li><strong>Display:</strong> {product.specifications?.display || "6.4 inches"}</li>
              <li><strong>Camera:</strong> {product.specifications?.camera || "64 MP + 8 MP + 5 MP"}</li>
              {/* Add more specs dynamically from the product data */}
            </ul>
          </div>

          {/* Add to Cart Button */}
          <div className="flex space-x-4 mt-8">
            <button
              onClick={() => addToCart(product)}
              className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors duration-200 w-full sm:w-auto"
            >
              Add to Cart
            </button>
            <button
              onClick={() => navigate(-1)}
              className="bg-gray-300 text-gray-800 py-3 px-8 rounded-lg hover:bg-gray-400 transition-colors duration-200 w-full sm:w-auto"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
