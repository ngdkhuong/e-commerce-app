const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');

// Register a User
const registerAUser = asyncHandler(async (req, res) => {
    // Get the email from req.body and find whether a user with this email exist or not
    const email = req.body.email;
    // Find the user with this email get from req.body
    const user = await User.findOne({ email });
    if (!user) {
        // create a user
        const createUser = await User.create(req.body);
        res.status(201).json({
            status: true,
            message: 'Register successfully',
            createUser,
        });
    } else {
        throw new Error('User Already Exists!!!');
    }
    res.status(200).json(user);
});

module.exports = { registerAUser };
