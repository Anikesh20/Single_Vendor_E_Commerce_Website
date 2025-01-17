const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const db = require('./config/db');  

dotenv.config(); 

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Test the database connection
db.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    process.exit(1); 
  }
  console.log('Database connected successfully');
  connection.release(); 
});

// Routes
app.use('/api/auth', require('./routes/authRoutes'));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
