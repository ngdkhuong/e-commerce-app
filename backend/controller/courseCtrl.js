const { default: slugify } = require('slugify');
const Course = require('../models/courseModel');
const asyncHandler = require('express-async-handler');
const validateMongoDb = require('../config/validateMongoDb');

// Create Course
const createCourse = asyncHandler(async (req, res) => {
    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title.toLowerCase());
        }

        const course = await Course.create(req.body);
        res.status(200).json({
            status: true,
            message: 'Course created successfully',
            course,
        });
    } catch (error) {
        throw new Error(error);
    }
});

// Get Course
const getCourse = asyncHandler(async (req, res) => {});

module.exports = { createCourse };
