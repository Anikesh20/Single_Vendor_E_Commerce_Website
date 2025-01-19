const { check, validationResult } = require('express-validator');

// Validator for registration
exports.registerValidator = [
  check('email').isEmail().withMessage('Invalid email'),
  check('password').isLength({ min: 6 }).withMessage('Password should be at least 6 characters'),
  check('name').notEmpty().withMessage('Name is required'),
];

// Validator for login
exports.loginValidator = [
  check('email').isEmail().withMessage('Invalid email'),
  check('password').notEmpty().withMessage('Password is required'),
];

exports.validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
