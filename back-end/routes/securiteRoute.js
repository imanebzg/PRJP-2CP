const express = require('express');
const router = express.Router();
const { changePassword } = require('../controllers/securite');

// POST route to handle password change
router.post('/change-password/:id', changePassword);

module.exports = router;
