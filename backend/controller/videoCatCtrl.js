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

        const postVideoCat = await VideoCategory.create(req.body);
        res.status(200).json({
            status: true,
            message: 'Video Category Created Successfully!',
            postVideoCat,
        });
    } catch (error) {
        throw new Error(error);
    }
});

const getAllVideoCategories = asyncHandler(async (req, res) => {
    try {
        const allVideoCat = await VideoCategory.find();
        res.status(200).json({
            status: true,
            message: 'Videos Category Fetched Successfully!',
            allVideoCat,
        });
    } catch (error) {
        throw new Error(error);
    }
});

const getAVideoCat = asyncHandler(async (req, res) => {
    const { slug } = req.params;
    try {
        const findVideoCat = await VideoCategory.findOne({ slug: slug });
        res.status(200).json({
            status: true,
            message: 'Video Category Found!',
            findVideoCat,
        });
    } catch (error) {
        throw new Error(error);
    }
});

const deleteAVideoCat = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDb(id);
    try {
        const deleteVideoCat = await VideoCategory.findByIdAndDelete(id);
        res.status(200).json({
            status: true,
            message: 'Deleted Video Category Successfully!',
            deleteVideoCat,
        });
    } catch (error) {
        throw new Error(error);
    }
});

const updateAVideoCat = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDb(id);
    try {
        const updateVideoCat = await VideoCategory.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({
            status: true,
            message: 'Video Category Updated!',
            updateVideoCat,
        });
    } catch (error) {
        throw new Error(error);
    }
});

module.exports = {
    postVideoCategory,
    getAllVideoCategories,
    getAVideoCat,
    deleteAVideoCat,
    updateAVideoCat,
};
