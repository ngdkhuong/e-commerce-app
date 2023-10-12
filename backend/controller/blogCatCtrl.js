const { default: slugify } = require('slugify');
const BlogCategory = require('../models/blogCatModel');
const asyncHandler = require('express-async-handler');
const validateMongoDb = require('../config/validateMongoDb');

// create Blog category || POST
const postBlogCategory = asyncHandler(async (req, res) => {
    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title.toLowerCase());
        }

        const postBlogCat = await BlogCategory.create(req.body);
        res.status(200).json({
            status: true,
            message: 'Blog Category Created Successfully!',
            postBlogCat,
        });
    } catch (error) {
        throw new Error(error);
    }
});

const getAllBlogCategories = asyncHandler(async (req, res) => {
    try {
        const allBlogCat = await BlogCategory.find();
        res.status(200).json({
            status: true,
            message: 'Blogs Category Fetched Successfully!',
            allBlogCat,
        });
    } catch (error) {
        throw new Error(error);
    }
});

const getABlogCat = asyncHandler(async (req, res) => {
    const { slug } = req.params;
    try {
        const findBlogCat = await BlogCategory.findOne({ slug: slug });
        res.status(200).json({
            status: true,
            message: 'Blog Category Found!',
            findBlogCat,
        });
    } catch (error) {
        throw new Error(error);
    }
});

const deleteABlogCat = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDb(id);
    try {
        const deleteBlogCat = await BlogCategory.findByIdAndDelete(id);
        res.status(200).json({
            status: true,
            message: 'Deleted Blog Category Successfully!',
            deleteBlogCat,
        });
    } catch (error) {
        throw new Error(error);
    }
});

const updateABlogCat = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDb(id);
    try {
        const updateBlogCat = await BlogCategory.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({
            status: true,
            message: 'Blog Category Updated!',
            updateBlogCat,
        });
    } catch (error) {
        throw new Error(error);
    }
});

module.exports = {
    postBlogCategory,
    getAllBlogCategories,
    getABlogCat,
    deleteABlogCat,
    updateABlogCat,
};
