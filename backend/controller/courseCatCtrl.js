const { default: slugify } = require('slugify');
const CourseCategory = require('../models/courseCatModel');
const asyncHandler = require('express-async-handler');
const validateMongoDb = require('../config/validateMongoDb');

// create or post courseCat
const createCourseCategory = asyncHandler(async (req, res) => {
    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title.toLowerCase());
        }

        const courseCat = await CourseCategory.create(req.body);
        res.status(200).json({
            status: true,
            message: 'Course Category created successfully!',
            courseCat,
        });
    } catch (error) {
        throw new Error(error);
    }
});

// get a courseCat
const getCourseCategory = asyncHandler(async (req, res) => {
    const { slug } = req.params;

    try {
        const courseCat = await CourseCategory.findOne({ slug: slug });
        res.status(200).json({
            status: true,
            message: 'Course Category Found!',
            courseCat,
        });
    } catch (error) {
        throw new Error(error);
    }
});

// get all courseCat
const getAllCourseCategories = asyncHandler(async (req, res) => {
    try {
        const courseCat = await CourseCategory.find();
        res.status(200).json({
            status: true,
            message: 'Course Categories Fetched Successfully!',
            courseCat,
        });
    } catch (error) {
        throw new Error(error);
    }
});

// update a CourseCategory
const updateCourseCategory = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDb(id);

    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title.toLowerCase());
        }
        const courseCat = await CourseCategory.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({
            status: true,
            message: 'Course Category Updated Successfully!',
            courseCat,
        });
    } catch (error) {
        throw new Error(error);
    }
});

// delete a CourseCategory
const deleteCourseCategory = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDb(id);
    try {
        const courseCat = await CourseCategory.findByIdAndDelete(id);
        res.status(200).json({
            status: true,
            message: 'Course Category Deleted!',
        });
    } catch (error) {
        throw new Error(error);
    }
});

module.exports = {
    createCourseCategory,
    getCourseCategory,
    getAllCourseCategories,
    updateCourseCategory,
    deleteCourseCategory,
};
