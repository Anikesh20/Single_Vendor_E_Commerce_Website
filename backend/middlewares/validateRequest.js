const { body } = require("express-validator");

const validateSignup = [
  body("name").notEmpty().withMessage("Full name is required"),
  body("email").isEmail().withMessage("Invalid email"),
  body("password").isLength({ min: 6 }).withMessage("Password should be at least 6 characters"),
  body("phone").notEmpty().withMessage("Phone number is required"),
  body("address1").notEmpty().withMessage("Address Line 1 is required"),
  body("city").notEmpty().withMessage("City is required"),
  body("state").notEmpty().withMessage("State is required"),
  body("postalCode").notEmpty().withMessage("Postal Code is required"),
];

module.exports = { validateSignup };
