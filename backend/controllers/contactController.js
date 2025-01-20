const db = require('../config/db');

// Handle Contact Form Submission
exports.submitMessage = (req, res) => {
  const { name, email, phone, message } = req.body;
  const query = `INSERT INTO contact_messages (name, email, phone, message) VALUES (?, ?, ?, ?)`;

  db.query(query, [name, email, phone, message], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Failed to submit message', error: err });
    }

    res.status(201).json({ message: 'Message submitted successfully!' });
  });
};

// Fetch all saved contact messages
exports.getAllMessages = (req, res) => {
  const query = `SELECT * FROM contact_messages ORDER BY created_at DESC`;
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Failed to retrieve messages', error: err });
    }
    res.status(200).json(results); 
  });
};
