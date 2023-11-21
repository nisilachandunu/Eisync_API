
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// Route to get all users
router.get('/users', adminController.getAllUsers);

module.exports = router;
