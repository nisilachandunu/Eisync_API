
// Import the necessary modules and models
const express = require('express');
const User = require('../models/userModel.js');
const userModel = require('../models/userModel.js');

// Create a router instance
const router = express.Router();

// GET endpoint to retrieve all users
exports.getAllUsers = async(req, res) => {
    console.log('get all users');
    try {
        const users = await userModel.find({}, (err, users) => {
            if (err) {
                res.status(500).json({ message: err });
            } else {
                res.status(200).json({ users });
            }
            
        });
        console.log(users);
    } catch (error) {
        
    }
}

// Export the router
module.exports = router;
