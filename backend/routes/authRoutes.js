const express = require('express');
const { register, login, recoverPassword } = require('../controllers/authController');

const router = express.Router();

// Register route
router.post('/register', register);

// Login route
router.post('/login', login);

// Password recovery route
router.post('/recover-password', recoverPassword);

module.exports = router;
