const asyncHandler = require('express-async-handler');
const validateMongoDb = require('../config/validateMongoDb');
const APIFeatures = require('../utils/apiFeatures');
const { default: slugify } = require('slugify');

const createOne = (Model) => {
    return asyncHandler(async (req, res, next) => {
        try {
            if (req.body.title) {
                req.body.slug = slugify(req.body.title.toLowerCase());
            }
            const data = await Model.create(req.body);
            res.status(200).json({
                status: true,
                message: 'Created Successfully!',
            });
        } catch (error) {
            throw new Error(error);
        }
    });
};

const updateOne = (Model) => {
    return asyncHandler(async (req, res, next) => {
        const { id } = req.params;
        validateMongoDb(id);
        try {
            if (req.body.title) {
                req.body.slug = slugify(req.body.title.toLowerCase());
            }
            const data = await Model.findByIdAndUpdate(id, req.body, { new: true });
            res.status(200).json({
                status: true,
                message: 'Updated Successfully!',
                data,
            });
        } catch (error) {
            throw new Error(error);
        }
    });
};

const deleteOne = (Model) => {
    return asyncHandler(async (req, res, next) => {
        const { id } = req.params;
        validateMongoDb(id);
        try {
            const data = await Model.findByIdAndDelete(id);
            res.status(200).json({
                status: true,
                message: 'Deleted Successfully!',
            });
        } catch (error) {
            throw new Error(error);
        }
    });
};

const getOne = (Model, populateOptions) => {
    return asyncHandler(async (req, res, next) => {
        const { id, slug } = req.params;

        if (id) validateMongoDb(id);

        try {
            let query;
            if (id) {
                query = Model.findById(id);
            }
            if (slug) {
                query = Model.findOne({ slug: slug });
            }
            if (populateOptions) {
                query = query.populate(populateOptions);
            }

            const data = await query;

            res.status(200).json({
                status: true,
                message: 'Found!',
                data,
            });
        } catch (error) {
            throw new Error(error);
        }
    });
};

const getAll = (Model) => {
    return asyncHandler(async (req, res, next) => {
        try {
            let filter = {};
            const features = new APIFeatures(Model.find(filter), req.query).filter().sort().limitFields().paginate();

            const data = await features.query;

            res.status(200).json({
                status: true,
                message: 'Found!',
                data,
            });
        } catch (error) {
            throw new Error(error);
        }
    });
};

module.exports = { createOne, updateOne, deleteOne, getOne, getAll };
