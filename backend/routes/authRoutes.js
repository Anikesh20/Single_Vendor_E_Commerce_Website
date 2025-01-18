const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { registerValidator, loginValidator, validate } = require('../middlewares/validateRequest');

// Register Route
router.post('/api/users', registerValidator, validate, authController.registerUser);

// Login Route
router.post('/api/login', loginValidator, validate, authController.loginUser);

module.exports = router;
