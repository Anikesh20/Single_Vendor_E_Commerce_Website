// routes/contactRoutes.js

const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// Route to handle form submission
router.post('/api/messages', contactController.submitMessage);

// Route to fetch all contact messages for the admin dashboard
router.get('/api/messages', contactController.getAllMessages);

module.exports = router;
