exports.validateUserRegistration = (data) => {
  const { name, email, password, phone, address1, city, state, postalCode } = data;

  if (!name || !email || !password || !phone || !address1 || !city || !state || !postalCode) {
    return 'All fields are required.';
  }
  if (!/\S+@\S+\.\S+/.test(email)) {
    return 'Invalid email format.';
  }
  if (password.length < 6) {
    return 'Password must be at least 6 characters long.';
  }
  return null; // No errors
};

// Login Validator
exports.validateLogin = (data) => {
  const { email, password } = data;

  if (!email || !password) {
    return 'Both email and password are required.';
  }
  if (!/\S+@\S+\.\S+/.test(email)) {
    return 'Invalid email format.';
  }
  return null;
};
