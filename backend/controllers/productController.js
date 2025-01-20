const db = require('../config/db');

// Add Product to a category
exports.addProduct = (req, res) => {
  const { categoryId } = req.params;
  const { name, price, image } = req.body;

  const query = `INSERT INTO Products (category_id, name, price, image) VALUES (?, ?, ?, ?)`;
  db.query(query, [categoryId, name, price, image], (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(201).json({ id: result.insertId, name, price, image });
  });
};

// Delete Product by ID under a category
exports.deleteProduct = (req, res) => {
  const { categoryId, productId } = req.params;

  const query = `DELETE FROM Products WHERE id = ? AND category_id = ?`;
  db.query(query, [productId, categoryId], (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(200).json({ message: 'Product deleted successfully' });
  });
};
// Update Product by ID under a category
exports.updateProduct = (req, res) => {
  const { categoryId, productId } = req.params;
  const { name, price, image } = req.body;

  const query = `UPDATE Products SET name = ?, price = ?, image = ? WHERE id = ? AND category_id = ?`;
  db.query(query, [name, price, image, productId, categoryId], (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(200).json({ message: 'Product updated successfully' });
  });
};

// Fetch all categories along with their products
exports.fetchCategoriesWithProducts = (req, res) => {
  const query = `
    SELECT Categories.id AS category_id, Categories.name AS category_name, Products.id AS product_id, Products.name AS product_name, Products.price, Products.image
    FROM Categories
    LEFT JOIN Products ON Products.category_id = Categories.id
  `;
  db.query(query, (err, results) => {
    if (err) return res.status(500).send(err);

    const categories = [];
    results.forEach(row => {
      const category = categories.find(cat => cat.id === row.category_id);
      if (category) {
        category.products.push({
          id: row.product_id,
          name: row.product_name,
          price: row.price,
          image: row.image
        });
      } else {
        categories.push({
          id: row.category_id,
          name: row.category_name,
          products: [{
            id: row.product_id,
            name: row.product_name,
            price: row.price,
            image: row.image
          }]
        });
      }
    });

    res.json(categories);
  });
};