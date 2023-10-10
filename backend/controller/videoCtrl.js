const { default: slugify } = require('slugify');
const Video = require('../models/videoModel');
const asyncHandler = require('express-async-handler');
const validateMongoDb = require('../config/validateMongoDb');

// create or post video
const createVideo = asyncHandler(async (req, res) => {
    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title.toLowerCase());
        }

        const video = await Video.create(req.body);
        res.status(200).json({
            status: true,
            message: 'Video created successfully!',
        });
    } catch (error) {
        throw new Error(error);
    }
});

// get a video
const getVideo = asyncHandler(async (req, res) => {
    const { slug } = req.params;

    try {
        const video = await Video.findOne({ slug: slug });
        res.status(200).json({
            status: true,
            message: 'Video Found!',
            video,
        });
    } catch (error) {
        throw new Error(error);
    }
});

// get all video
const getAllVideos = asyncHandler(async (req, res) => {
    try {
        const video = await Video.find();
        res.status(200).json({
            status: true,
            message: 'Videos Fetched Successfully!',
            video,
        });
    } catch (error) {
        throw new Error(error);
    }
});

// update a video
const updateVideo = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDb(id);

    try {
        const video = await Video.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({
            status: true,
            message: 'Video Updated Successfully!',
            video,
        });
    } catch (error) {
        throw new Error(error);
    }
});

// delete a video
const deleteVideo = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDb(id);
    try {
        const video = await Video.findByIdAndDelete(id);
        res.status(200).json({
            status: true,
            message: 'Video Deleted!',
        });
    } catch (error) {
        throw new Error(error);
    }
});

module.exports = {
    createVideo,
    getVideo,
    getAllVideos,
    updateVideo,
    deleteVideo,
};
