const express = require('express');
const router = express.Router();
const companyController = require('../controllers/companyMethods');

router.get('/getAllCompanies', companyController.getAllCompanies);
router.delete('/deleteCompany/:id', companyController.deleteCompany);
module.exports = router;
