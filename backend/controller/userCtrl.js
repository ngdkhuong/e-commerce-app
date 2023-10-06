const { generateToken } = require('../config/jwtToken');
const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');
const validateMongoDb = require('../config/validateMongoDb');
const crypto = require('crypto');
const sendEmail = require('./emailCtrl');

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
            username: existedUser?.username,
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

// Get A User
const getAUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDb(id);
    try {
        const getProfile = await User.findById(id);
        res.status(200).json({
            status: true,
            message: 'User found',
            getProfile,
        });
    } catch (error) {
        throw new Error(error);
    }
});

// Update profile user
const updateUser = asyncHandler(async (req, res) => {
    const { _id } = req.user;

    try {
        const user = await User.findByIdAndUpdate(_id, req.body, { new: true });
        res.status(200).json({ status: true, message: 'Profile updated successfully!', user });
    } catch (error) {
        throw new Error(error);
    }
});

// Delete a user
const deleteUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDb(id);
    try {
        await User.findByIdAndDelete(id);
        res.status(200).json({
            status: true,
            message: 'User deleted successfully!',
        });
    } catch (error) {
        throw new Error(error);
    }
});

// Block User
const blockUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDb(id);
    try {
        const block = await User.findByIdAndUpdate(id, { isBlocked: true }, { new: true });
        res.status(200).json({ status: true, message: 'User Blocked Successfully!' });
    } catch (error) {
        throw new Error(error);
    }
});

// Block User
const unblockUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDb(id);
    try {
        const unblock = await User.findByIdAndUpdate(id, { isBlocked: false }, { new: true });
        res.status(200).json({ status: true, message: 'User Unblocked Successfully!' });
    } catch (error) {
        throw new Error(error);
    }
});

// Reset Password
const updatePassword = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    const { password } = req.body;
    validateMongoDb(_id);
    try {
        const user = await User.findById(_id);
        if (user && password && (await user.isPasswordMatched(password))) {
            throw new Error('Please provide a new password instead of old one');
        } else {
            user.password = password;
            await user.save();
            res.status(200).json({ status: true, message: 'Password Updated Successfully!' });
        }
    } catch (error) {
        throw new Error(error);
    }
});

// Forgot Password Token
const forgotPassword = asyncHandler(async (req, res) => {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) throw new Error('User Not Exists with this email!');
    try {
        const token = await user.createPasswordResetToken();
        await user.save(token);
        const resetLink = `http://localhost:4000/api/user/reset-password/${token}`;
        const data = {
            to: email,
            text: `Hey ${user.username}`,
            subject: 'Forgot Password',
            html: resetLink,
        };
        sendEmail(data);
        res.status(200).json(resetLink);
    } catch (error) {
        throw new Error(error);
    }
});

// Reset Password
const resetPassword = asyncHandler(async (req, res) => {
    const { password } = req.body;
    const { token } = req.params;
    const hashedToken = crypto.createHash('sha256').update(token).digest('hex');
    const user = await User.findOne({
        passwordResetToken: hashedToken,
        passwordResetExpires: { $gt: Date.now() },
    });
    if (!user) throw new Error('Token Expired, Please Try Again');
    user.password = password;
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save();
    res.status(200).json({ status: true, message: 'Password Reset Successfully' });
    try {
    } catch (error) {
        throw new Error(error);
    }
});

module.exports = {
    registerUser,
    loginUser,
    getAllUser,
    getAUser,
    updateUser,
    deleteUser,
    blockUser,
    unblockUser,
    updatePassword,
    forgotPassword,
    resetPassword,
};
