const db = require('../config/db');

exports.findByEmail = (email, callback) => {
  db.query('SELECT * FROM users WHERE email = ?', [email], callback);
};

exports.createUser = (userData, callback) => {
  const { name, email, password, phone, address1, address2, city, state, postalCode } = userData;
  const query = 'INSERT INTO users (name, email, password, phone, address1, address2, city, state, postalCode) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
  db.query(query, [name, email, password, phone, address1, address2, city, state, postalCode], callback);
};
