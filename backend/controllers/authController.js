const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/db');
const { validateUserRegistration, validateLogin } = require('../utils/validators');

// User Registration
exports.registerUser = async (req, res) => {
  const { name, email, password, phone, address1, address2, city, state, postalCode } = req.body;

  // Validate input
  const validationError = validateUserRegistration(req.body);
  if (validationError) {
    return res.status(400).json({ message: validationError });
  }

  try {
    // Checks if the email already exists
    db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Database error occurred.' });
      }

      if (results.length > 0) {
        return res.status(400).json({ message: 'Email is already taken.' });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Insert the new user
      const query = 'INSERT INTO users (name, email, password, phone, address1, address2, city, state, postalCode) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
      db.query(query, [name, email, hashedPassword, phone, address1, address2, city, state, postalCode], (err, results) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ message: 'Failed to register user. Please try again.' });
        }

        // Generate JWT token
        const token = jwt.sign({ userId: results.insertId, email }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(201).json({
          message: 'User registered successfully!',
          user: { id: results.insertId, name, email, phone, address1, address2, city, state, postalCode },
          token
        });
      });
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'An error occurred while registering the user.' });
  }
};

// User Login
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  // Validate input
  const validationError = validateLogin(req.body);
  if (validationError) {
    return res.status(400).json({ message: validationError });
  }

  try {
    db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Database error occurred.' });
      }

      if (results.length === 0) {
        return res.status(400).json({ message: 'Invalid credentials. Please try again.' });
      }

      const user = results[0];
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return res.status(400).json({ message: 'Invalid credentials. Please try again.' });
      }

      const token = jwt.sign({ userId: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

      res.status(200).json({
        message: 'Logged in successfully!',
        user: { id: user.id, name: user.name, email: user.email, phone: user.phone },
        token
      });
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'An error occurred during login.' });
  }
};
