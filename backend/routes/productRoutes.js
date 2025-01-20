const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Add Product to a specific category
router.post('/categories/:categoryId/products', productController.addProduct);

// Delete Product by ID under a specific category
router.delete('/categories/:categoryId/products/:productId', productController.deleteProduct);

// Update Product by ID under a specific category
router.put('/categories/:categoryId/products/:productId', productController.updateProduct);

module.exports = router;
