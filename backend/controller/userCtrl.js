const { generateToken } = require('../config/jwtToken');
const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');

// Register a User
const registerUser = asyncHandler(async (req, res) => {
    // Get the email from req.body and find whether a user with this email exist or not
    const email = req.body.email;
    // Find the user with this email get from req.body
    const existedUser = await User.findOne({ email });
    if (!existedUser) {
        // create a user
        const newUser = await User.create(req.body);
        res.status(201).json({
            status: true,
            message: 'Register successfully',
            newUser,
        });
    } else {
        throw new Error('User Already Exists!!!');
    }
    res.status(200).json(existedUser);
});

// Login User
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    // check if user exists or not
    const existedUser = await User.findOne({ email });

    if (existedUser && (await existedUser.isPasswordMatched(password))) {
        res.status(200).json({
            status: true,
            message: 'Login Successfully!',
            token: generateToken(existedUser?._id),
            role: existedUser?.roles,
            username: existedUser?.firstname + ' ' + existedUser?.lastname,
            user_image: existedUser?.user_image,
        });
    } else {
        throw new Error('Invalid Credentials');
    }
});

// Get All User
const getAllUser = asyncHandler(async (req, res) => {
    try {
        const allUser = await User.find();
        res.status(200).json({
            status: true,
            message: 'All users fetched successfully',
            allUser,
        });
    } catch (error) {
        throw new Error(error);
    }
});

// Update profile user
const updateUser = asyncHandler(async (req, res) => {});

module.exports = { registerUser, loginUser, getAllUser };
