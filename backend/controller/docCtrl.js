const { default: slugify } = require('slugify');
const Doc = require('../models/docModel');
const asyncHandler = require('express-async-handler');
const validateMongoDb = require('../config/validateMongoDb');

// create or post doc
const createDoc = asyncHandler(async (req, res) => {
    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title.toLowerCase());
        }

        const doc = await Doc.create(req.body);
        res.status(200).json({
            status: true,
            message: 'Document created successfully!',
            doc,
        });
    } catch (error) {
        throw new Error(error);
    }
});

// get a doc
const getDoc = asyncHandler(async (req, res) => {
    const { slug } = req.params;

    try {
        const doc = await Doc.findOne({ slug: slug });
        res.status(200).json({
            status: true,
            message: 'Document Found!',
            doc,
        });
    } catch (error) {
        throw new Error(error);
    }
});

// get all doc
const getAllDocs = asyncHandler(async (req, res) => {
    try {
        const doc = await Doc.find();
        res.status(200).json({
            status: true,
            message: 'Documents Fetched Successfully!',
            doc,
        });
    } catch (error) {
        throw new Error(error);
    }
});

// update a doc
const updateDoc = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDb(id);

    try {
        const doc = await Doc.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({
            status: true,
            message: 'Doc Updated Successfully!',
            doc,
        });
    } catch (error) {
        throw new Error(error);
    }
});

// delete a doc
const deleteDoc = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDb(id);
    try {
        const doc = await Doc.findByIdAndDelete(id);
        res.status(200).json({
            status: true,
            message: 'Document Deleted!',
        });
    } catch (error) {
        throw new Error(error);
    }
});

module.exports = {
    createDoc,
    getDoc,
    getAllDocs,
    updateDoc,
    deleteDoc,
};
