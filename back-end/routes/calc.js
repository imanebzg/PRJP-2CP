const express = require('express');
const router = express.Router();
const calcController = require('../controllers/calc');

// Define the route for form submission

router.post('/bilan', calcController.calc);

module.exports = router;
