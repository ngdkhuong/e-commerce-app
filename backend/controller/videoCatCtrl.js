const { default: slugify } = require('slugify');
const VideoCategory = require('../models/videoCatModel');
const asyncHandler = require('express-async-handler');
const validateMongoDb = require('../config/validateMongoDb');

// create Video category || POST
const postVideoCategory = asyncHandler(async (req, res) => {
    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title.toLowerCase());
        }

        const videoCat = await VideoCategory.create(req.body);
        res.status(200).json({
            status: true,
            message: 'Video Category Created Successfully!',
            videoCat,
        });
    } catch (error) {
        throw new Error(error);
    }
});

const getAllVideoCategories = asyncHandler(async (req, res) => {
    try {
        const videoCat = await VideoCategory.find();
        res.status(200).json({
            status: true,
            message: 'Videos Category Fetched Successfully!',
            videoCat,
        });
    } catch (error) {
        throw new Error(error);
    }
});

const getVideoCategory = asyncHandler(async (req, res) => {
    const { slug } = req.params;
    try {
        const videoCat = await VideoCategory.findOne({ slug: slug });
        res.status(200).json({
            status: true,
            message: 'Video Category Found!',
            videoCat,
        });
    } catch (error) {
        throw new Error(error);
    }
});

const deleteVideoCategory = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDb(id);
    try {
        const videoCat = await VideoCategory.findByIdAndDelete(id);
        res.status(200).json({
            status: true,
            message: 'Deleted Video Category Successfully!',
            videoCat,
        });
    } catch (error) {
        throw new Error(error);
    }
});

const updateVideoCategory = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDb(id);
    try {
        const videoCat = await VideoCategory.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({
            status: true,
            message: 'Video Category Updated!',
            videoCat,
        });
    } catch (error) {
        throw new Error(error);
    }
});

module.exports = {
    postVideoCategory,
    getAllVideoCategories,
    getVideoCategory,
    deleteVideoCategory,
    updateVideoCategory,
};
