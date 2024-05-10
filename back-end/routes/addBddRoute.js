const express = require('express');
const router = express.Router();
const { addProduct } = require('../controllers/addBDD');

// Route to add a product
router.post('/add', addProduct);

module.exports = router;
