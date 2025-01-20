// In middlewares/roleMiddleware.js
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/jwt');  // JWT secret from config

// Middleware to verify if the user is logged in and has the required role
const verifyRole = (...allowedRoles) => {
  return (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
      return res.status(403).json({ message: 'No token provided' });
    }

    jwt.verify(token, jwtSecret, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Unauthorized' });
      }

      req.user = decoded; // Store user info in the request
      const userRole = req.user.role;

      if (!allowedRoles.includes(userRole)) {
        return res.status(403).json({ message: 'Forbidden: You do not have the right permissions' });
      }

      next();
    });
  };
};

module.exports = {
  verifyRole
};
