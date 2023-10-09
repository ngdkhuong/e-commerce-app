const { default: slugify } = require('slugify');
const Tutorial = require('../models/tutorialModel');
const asyncHandler = require('express-async-handler');
const validateMongoDb = require('../config/validateMongoDb');

const postTutorial = asyncHandler(async (req, res) => {
    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title.toLowerCase());
        }
        if (req.body.tutorialCategory) {
            req.body.tutorialCategorySlug = slugify(req.body.tutorialCategory.toLowerCase());
        }
        const postTut = await Tutorial.create(req.body);
        res.status(200).json({
            status: true,
            message: 'Tutorial Created Successfully!',
            postTut,
        });
    } catch (error) {
        throw new Error(error);
    }
});

const getATutorial = asyncHandler(async (req, res) => {
    const { slug, type } = req.params;
    try {
        const tutorialData = await Tutorial.findOne({
            slug: slug,
            tutorialCategorySlug: type,
        });

        const tutorialTopics = await Tutorial.find({ tutorialCategorySlug: type })
            .select('topicName title slug tutorialCategorySlug')
            .sort('createdAt');

        res.status(200).json({
            status: true,
            message: 'Data Fetched!',
            tutorialData,
            tutorialTopics,
        });
    } catch (error) {
        throw new Error(error);
    }
});

const updateATutorial = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDb(id);
    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title.toLowerCase());
        }
        if (req.body.tutorialCategory) {
            req.body.tutorialCategorySlug = slugify(req.body.tutorialCategory.toLowerCase());
        }
        const updateTut = await Tutorial.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({
            status: true,
            message: 'Tutorial Updated Successfully!',
            updateTut,
        });
    } catch (error) {
        throw new Error(error);
    }
});

const deleteTutorial = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const deleteTut = await Tutorial.findByIdAndDelete(id);
        res.status(200).json({
            status: true,
            message: 'Tutorial Deleted!',
            deleteTut,
        });
    } catch (error) {
        throw new Error(error);
    }
});

const allTutorials = asyncHandler(async (req, res) => {
    try {
        const tutorials = await Tutorial.find();
        res.status(200).json({
            status: true,
            message: 'All Tutorials Fetched Successfully!',
            tutorials,
        });
    } catch (error) {
        throw new Error(error);
    }
});

module.exports = { postTutorial, getATutorial, updateATutorial, deleteTutorial, allTutorials };
