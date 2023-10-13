const { default: slugify } = require('slugify');
const DocumentCategory = require('../models/docCatModel');
const asyncHandler = require('express-async-handler');
const validateMongoDb = require('../config/validateMongoDb');

// create Document category || POST
const createDocumentCategory = asyncHandler(async (req, res) => {
    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title.toLowerCase());
        }

        const postDocumentCategory = await DocumentCategory.create(req.body);
        res.status(200).json({
            status: true,
            message: 'Document Category Created Successfully!',
            postDocumentCategory,
        });
    } catch (error) {
        throw new Error(error);
    }
});

const getAllDocumentCategories = asyncHandler(async (req, res) => {
    try {
        const allDocumentCategory = await DocumentCategory.find();
        res.status(200).json({
            status: true,
            message: 'Documents Category Fetched Successfully!',
            allDocumentCategory,
        });
    } catch (error) {
        throw new Error(error);
    }
});

const getDocumentCategory = asyncHandler(async (req, res) => {
    const { slug } = req.params;
    try {
        const docCat = await DocumentCategory.findOne({ slug: slug });
        res.status(200).json({
            status: true,
            message: 'Document Category Found!',
            docCat,
        });
    } catch (error) {
        throw new Error(error);
    }
});

const deleteDocumentCategory = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDb(id);
    try {
        const docCat = await DocumentCategory.findByIdAndDelete(id);
        res.status(200).json({
            status: true,
            message: 'Deleted Document Category Successfully!',
            docCat,
        });
    } catch (error) {
        throw new Error(error);
    }
});

const updateDocumentCategory = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDb(id);
    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title.toLowerCase());
        }
        const docCat = await DocumentCategory.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({
            status: true,
            message: 'Document Category Updated!',
            docCat,
        });
    } catch (error) {
        throw new Error(error);
    }
});

module.exports = {
    createDocumentCategory,
    getAllDocumentCategories,
    getDocumentCategory,
    deleteDocumentCategory,
    updateDocumentCategory,
};
