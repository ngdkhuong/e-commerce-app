const { default: slugify } = require('slugify');
const DocumentCategory = require('../models/docCatModel');
const asyncHandler = require('express-async-handler');
const validateMongoDb = require('../config/validateMongoDb');

// create Document category || POST
const postDocumentCategory = asyncHandler(async (req, res) => {
    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title.toLowerCase());
        }

        const postDocCat = await DocumentCategory.create(req.body);
        res.status(200).json({
            status: true,
            message: 'Document Category Created Successfully!',
            postDocCat,
        });
    } catch (error) {
        throw new Error(error);
    }
});

const getAllDocCategories = asyncHandler(async (req, res) => {
    try {
        const allDocCat = await DocumentCategory.find();
        res.status(200).json({
            status: true,
            message: 'Documents Category Fetched Successfully!',
            allDocCat,
        });
    } catch (error) {
        throw new Error(error);
    }
});

const getADocCat = asyncHandler(async (req, res) => {
    const { slug } = req.params;
    try {
        const findDocCat = await DocumentCategory.findOne({ slug: slug });
        res.status(200).json({
            status: true,
            message: 'Document Category Found!',
            findDocCat,
        });
    } catch (error) {
        throw new Error(error);
    }
});

const deleteADocCat = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDb(id);
    try {
        const deleteDocCat = await DocumentCategory.findByIdAndDelete(id);
        res.status(200).json({
            status: true,
            message: 'Deleted Document Category Successfully!',
            deleteDocCat,
        });
    } catch (error) {
        throw new Error(error);
    }
});

const updateADocCat = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDb(id);
    try {
        const updateDocCat = await DocumentCategory.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({
            status: true,
            message: 'Document Category Updated!',
            updateDocCat,
        });
    } catch (error) {
        throw new Error(error);
    }
});

module.exports = {
    postDocumentCategory,
    getAllDocCategories,
    getADocCat,
    deleteADocCat,
    updateADocCat,
};
