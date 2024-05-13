// backend/routes/historyRoutes.js

const express = require('express');
const router = express.Router();
const historyController = require('../controllers/tableHistory');

// Route to fetch history of bilans
router.get('/table_history', historyController.getHistory);

module.exports = router;