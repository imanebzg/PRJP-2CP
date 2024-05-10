const express = require('express');
const router = express.Router();
const companyController = require('../controllers/numberUsers');

router.get('/company-count', companyController.getCompanyCount);

module.exports = router;
