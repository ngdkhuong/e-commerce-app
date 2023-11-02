const { default: slugify } = require('slugify');
const Course = require('../models/courseModel');
const asyncHandler = require('express-async-handler');
const validateMongoDb = require('../config/validateMongoDb');

// Create Course
const createCourse = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    validateMongoDb(_id);

    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title.toLowerCase());
        }
        if (_id) {
            req.body.instructor = _id;
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

// Get All Courses
const getAllCourses = asyncHandler(async (req, res) => {
    try {
        const courses = await Course.find().populate('instructor');
        res.status(200).json({
            status: true,
            message: 'All Courses Fetched!',
            courses,
        });
    } catch (error) {
        throw new Error(error);
    }
});

// Get Course
const getCourse = asyncHandler(async (req, res) => {
    const { slug } = req.params;

    try {
        const course = await Course.findOne({ slug: slug });
        res.status(200).json({
            status: true,
            message: 'Course Found!',
            course,
        });
    } catch (error) {
        throw new Error(error);
    }
});

// Get Course by particular instructor
const getParticularInstructorCourses = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    validateMongoDb(_id);
    try {
        const courses = await Course.find({ instructor: _id });
        res.status(200).json({
            status: true,
            message: 'All Courses Fetched!',
            courses,
        });
    } catch (error) {
        throw new Error(error);
    }
});

// Update Course
const updateCourse = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDb(id);
    try {
        const course = await Course.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({
            status: true,
            message: 'Course updated successfully!',
            course,
        });
    } catch (error) {
        throw new Error(error);
    }
});

// Delete Course
const deleteCourse = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDb(id);
    try {
        const course = await Course.findByIdAndDelete(id);
        res.status(200).json({
            status: true,
            message: 'Course deleted successfully!',
        });
    } catch (error) {
        throw new Error(error);
    }
});

module.exports = {
    createCourse,
    getAllCourses,
    getCourse,
    getParticularInstructorCourses,
    updateCourse,
    deleteCourse,
};
