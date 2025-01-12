const db = require("../config/db");

const User = {
  createUser: async (name, email, password, phone, address1, address2, city, state, postalCode) => {
    const [rows] = await db.query(
      `INSERT INTO users (name, email, password, phone, address1, address2, city, state, postalCode)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [name, email, password, phone, address1, address2, city, state, postalCode]
    );
    return rows;
  },

  getUserByEmail: async (email) => {
    const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
    return rows[0];
  },
};

module.exports = User;
