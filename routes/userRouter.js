const express = require('express');
const authController = require('../controller/authController');
const userController = require('../controller/userController');


const router = express.Router();


router.route('/')
    .get(authController.protect, authController.restrictTo('admin'), userController.getAllUsers);


router.route('/:id')
    .get(authController.protect, authController.restrictTo('admin'), userController.getUserById);


module.exports = router;