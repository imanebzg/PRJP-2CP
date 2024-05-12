const express = require('express');
const router = express.Router();
const supprimerController = require('../controllers/deleteAccount');

// DELETE route to delete a user by ID
router.delete('/deleteUser/:userId', supprimerController.deleteUser);

module.exports = router;