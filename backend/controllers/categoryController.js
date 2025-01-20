const db = require('../config/db');

// Fetch all categories
exports.fetchCategories = (req, res) => {
  const query = `SELECT * FROM Categories`; 
  db.query(query, (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};


// Add a new category
exports.addCategory = (req, res) => {
  const { name } = req.body;
  const checkQuery = `SELECT * FROM Categories WHERE name = ?`;
  db.query(checkQuery, [name], (err, results) => {
    if (err) return res.status(500).send(err);
    if (results.length > 0) {
      return res.status(400).json({ message: 'Category already exists.' });
    }

    const query = `INSERT INTO Categories (name) VALUES (?)`;
    db.query(query, [name], (err, result) => {
      if (err) return res.status(500).send(err);
      res.status(201).json({ id: result.insertId, name });
    });
  });
};

// Delete a category and its products
exports.deleteCategory = (req, res) => {
  const { id } = req.params;
  const checkQuery = `SELECT * FROM Categories WHERE id = ?`;
  db.query(checkQuery, [id], (err, results) => {
    if (err) return res.status(500).send(err);
    if (results.length === 0) {
      return res.status(404).json({ message: 'Category not found' });
    }

    const deleteProductsQuery = `DELETE FROM Products WHERE category_id = ?`;
    db.query(deleteProductsQuery, [id], (err, result) => {
      if (err) return res.status(500).send(err);

      const deleteCategoryQuery = `DELETE FROM Categories WHERE id = ?`;
      db.query(deleteCategoryQuery, [id], (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(200).json({ message: 'Category deleted successfully' });
      });
    });
  });
};
