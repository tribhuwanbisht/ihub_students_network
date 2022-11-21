const express = require('express');
const companyController = require('./../controller/companyController');
const authController = require('./../controller/authController');
const router = express.Router();

router.route('/')
    .get(authController.protect, companyController.getAllCompanies)
    .post(authController.protect, authController.restrictTo('admin'), companyController.createCompany)




module.exports = router;