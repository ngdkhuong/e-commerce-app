const validateMongoDb = require('../config/validateMongoDb');
const Review = require('../models/reviewModel');
const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');

// Create Review
const createReview = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    validateMongoDb(_id);
    try {
        let data = {
            user: _id,
            comment: req.body.comment,
            color: req.body.color,
        };

        const review = await Review.create(data);

        res.status(200).json({
            status: true,
            message: 'Review Added Successfully!',
        });
    } catch (error) {
        throw new Error(error);
    }
});

module.exports = { createReview };
