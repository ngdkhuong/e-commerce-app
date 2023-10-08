const { default: slugify } = require('slugify');
const TutorialCategory = require('../models/tutCategory');
const asyncHandler = require('express-async-handler');
const validateMongoDb = require('../config/validateMongoDb');

const postTutorialCategory = asyncHandler(async (req, res) => {
    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title.toLowerCase());
        }
        const postTutCat = await TutorialCategory.create(req.body);
        res.status(200).json({
            status: true,
            message: 'Tutorial Category Created Successfully!',
            postTutCat,
        });
    } catch (error) {
        throw new Error(error);
    }
});

const getAllTutCategories = asyncHandler(async (req, res) => {
    try {
        const allTutCat = await TutorialCategory.find();
        res.status(200).json({
            status: true,
            message: 'Tutorials Category Fetched Successfully!',
            allTutCat,
        });
    } catch (error) {
        throw new Error(error);
    }
});

const getATutCat = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDb(id);
    try {
        const findTutCat = await TutorialCategory.findById(id);
        res.status(200).json({
            status: true,
            message: 'Category Found!',
            findTutCat,
        });
    } catch (error) {
        throw new Error(error);
    }
});

const deleteATutCat = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDb(id);
    try {
        const deleteTutCat = await TutorialCategory.findByIdAndUpdate(id);
        res.status(200).json({
            status: true,
            message: 'Deleted Tutorial Category Successfully!',
        });
    } catch (error) {
        throw new Error(error);
    }
});

const updateATutCat = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDb(id);
    try {
        const updateTutCat = await TutorialCategory.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({
            status: true,
            message: 'Tutorial Category Updated!',
            updateTutCat,
        });
    } catch (error) {
        throw new Error(error);
    }
});

module.exports = {
    postTutorialCategory,
    getAllTutCategories,
    getATutCat,
    deleteATutCat,
    updateATutCat,
};
