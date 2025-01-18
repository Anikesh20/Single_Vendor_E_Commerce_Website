const db = require('../config/db');

// Fetch products by category
exports.fetchProducts = (req, res) => {
  const { category } = req.params;

  if (category === 'All') {
    const query = `
      (SELECT * FROM Mobile)
      UNION
      (SELECT * FROM TVs)
      UNION
      (SELECT * FROM Tablets)
      UNION
      (SELECT * FROM Washing_Machines)
      UNION
      (SELECT * FROM Audio)
      UNION
      (SELECT * FROM Appliances)
      UNION
      (SELECT * FROM Monitors)
      UNION
      (SELECT * FROM Wearables)
      UNION
      (SELECT * FROM Air_Conditioning)
      UNION
      (SELECT * FROM Kitchen)
    `;
    db.query(query, (err, results) => {
      if (err) return res.status(500).send(err);
      res.json(results);
    });
  } else {
    const query = `SELECT * FROM ??`;
    db.query(query, [category], (err, results) => {
      if (err) return res.status(500).send(err);
      res.json(results);
    });
  }
};

// Add product
exports.addProduct = (req, res) => {
  const { category } = req.params;
  const { name, price, image } = req.body;

  const query = `INSERT INTO ?? (name, price, image, category) VALUES (?, ?, ?, ?)`;
  db.query(query, [category, name, price, image, category], (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(201).json({ id: result.insertId, name, price, image, category });
  });
};

// Update product
exports.updateProduct = (req, res) => {
  const { category, id } = req.params;
  const { name, price, image } = req.body;

  const query = `UPDATE ?? SET name = ?, price = ?, image = ? WHERE id = ?`;
  db.query(query, [category, name, price, image, id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(200).json({ message: 'Product updated successfully' });
  });
};

// Delete product
exports.deleteProduct = (req, res) => {
  const { category, id } = req.params;

  const query = `DELETE FROM ?? WHERE id = ?`;
  db.query(query, [category, id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(200).json({ message: 'Product deleted successfully' });
  });
};
