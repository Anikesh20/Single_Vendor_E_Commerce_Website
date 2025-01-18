const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Fetch Products
router.get('/products/:category', productController.fetchProducts);

// Add Product
router.post('/products/:category', productController.addProduct);

// Update Product
router.put('/products/:category/:id', productController.updateProduct);

// Delete Product
router.delete('/products/:category/:id', productController.deleteProduct);

module.exports = router;
