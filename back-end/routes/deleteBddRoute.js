const express = require('express');
const router = express.Router();
const dataController = require('../controllers/deleteBDD');

// Set up the DELETE route
router.delete('/delete', dataController.deleteData);

module.exports = router;
