const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../config/db');  // Database connection

// Register function (to handle user registration)
const register = async (req, res) => {
  const { fullName, email, password, phoneNumber, address, city, state, postalCode } = req.body;

  try {
    // Basic validation (check email format, password length)
    if (!/\S+@\S+\.\S+/.test(email)) {
      return res.status(400).json({ message: 'Invalid email format' });
    }
    if (password.length < 6) {
      return res.status(400).json({ message: 'Password must be at least 6 characters long' });
    }

    // Check if the email already exists in the database
    const [existingUser] = await db.promise().query('SELECT * FROM users WHERE email = ?', [email]);
    if (existingUser.length > 0) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user data into the database
    const [newUser] = await db.promise().query(
      'INSERT INTO users (fullName, email, password, phoneNumber, address, city, state, postalCode) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [fullName, email, hashedPassword, phoneNumber, address, city, state, postalCode]
    );

    // Respond with success message
    res.status(200).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error("Error registering user: ", error.message);
    res.status(500).json({ message: 'Error registering user', error: error.message });
  }
};

// Login function (to handle user login)
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the email exists in the database
    const [user] = await db.promise().query('SELECT * FROM users WHERE email = ?', [email]);
    if (user.length === 0) {
      return res.status(400).json({ message: 'User not found' });
    }

    // Compare password with the hashed password
    const isPasswordValid = await bcrypt.compare(password, user[0].password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Create JWT token for the user
    const token = jwt.sign({ userId: user[0].id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Respond with success and the token
    res.status(200).json({ message: 'User logged in successfully', token });
  } catch (error) {
    console.error("Error logging in: ", error.message);
    res.status(500).json({ message: 'Error logging in', error: error.message });
  }
};

// Password recovery function (to handle password recovery requests)
const recoverPassword = async (req, res) => {
  const { email } = req.body;

  try {
    // Check if the email exists in the database
    const [user] = await db.promise().query('SELECT * FROM users WHERE email = ?', [email]);
    if (user.length === 0) {
      return res.status(400).json({ message: 'User not found' });
    }

    // Logic to send password recovery email 
    res.status(200).json({ message: 'Password recovery email sent' });
  } catch (error) {
    console.error("Error sending recovery email: ", error.message);
    res.status(500).json({ message: 'Error sending recovery email', error: error.message });
  }
};

module.exports = { register, login, recoverPassword };
