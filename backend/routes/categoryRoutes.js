const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

// Fetch all categories
router.get('/categories', categoryController.fetchCategories);

// Add a new category
router.post('/categories', categoryController.addCategory);

// Delete a category and its products
router.delete('/categories/:id', categoryController.deleteCategory);

// Fetch all categories along with products
router.get('/categories-with-products', categoryController.fetchCategoriesWithProducts);

module.exports = router;
