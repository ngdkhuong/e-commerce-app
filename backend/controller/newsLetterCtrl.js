const Newsletter = require('../models/newsLetterModel');
const asyncHandler = require('express-async-handler');
const validateMongoDb = require('../config/validateMongoDb');

const subscribe = asyncHandler(async (req, res) => {
    try {
        const newEmail = await Newsletter.create(req.body);
        res.status(200).json({
            status: true,
            message: 'Subscribed to the newsletter!',
        });
    } catch (error) {
        throw new Error(error);
    }
});

const unsubscribe = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDb(id);
    try {
        const deleteEmail = await Newsletter.findByIdAndDelete(id);
        res.status(200).json({
            status: true,
            message: 'Unsubscribed to the newsletter!',
        });
    } catch (error) {
        throw new Error(error);
    }
});

module.exports = { subscribe, unsubscribe };
