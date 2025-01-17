const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController');
const validateRequest = require('../middleware/validateRequest');
const { validateUserRegistration, validateLogin } = require('../utils/validators');

router.post('/register', validateRequest(validateUserRegistration), registerUser);
router.post('/login', validateRequest(validateLogin), loginUser);

module.exports = router;
