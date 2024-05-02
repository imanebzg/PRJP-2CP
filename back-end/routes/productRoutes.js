const express = require('express');
const router = express.Router();
const { getProductData } = require('../controllers/productController');

router.get('/products', getProductData);

module.exports = router;
