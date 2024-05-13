const express = require('express');
const router = express.Router();
const companyController = require('../controllers/infoEntreprise');

router.get('/company/:id', companyController.getCompanyById);
router.put('/company/:id', companyController.updateCompany);

module.exports = router;
