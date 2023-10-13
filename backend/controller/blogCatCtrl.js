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

        const blogCat = await BlogCategory.create(req.body);
        res.status(200).json({
            status: true,
            message: 'Blog Category Created Successfully!',
            blogCat,
        });
    } catch (error) {
        throw new Error(error);
    }
});

const getAllBlogCategories = asyncHandler(async (req, res) => {
    try {
        const blogCat = await BlogCategory.find();
        res.status(200).json({
            status: true,
            message: 'Blogs Category Fetched Successfully!',
            blogCat,
        });
    } catch (error) {
        throw new Error(error);
    }
});

const getBlogCategory = asyncHandler(async (req, res) => {
    const { slug } = req.params;
    try {
        const blogCat = await BlogCategory.findOne({ slug: slug });
        res.status(200).json({
            status: true,
            message: 'Blog Category Found!',
            blogCat,
        });
    } catch (error) {
        throw new Error(error);
    }
});

const deleteBlogCategory = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDb(id);
    try {
        const blogCat = await BlogCategory.findByIdAndDelete(id);
        res.status(200).json({
            status: true,
            message: 'Deleted Blog Category Successfully!',
            blogCat,
        });
    } catch (error) {
        throw new Error(error);
    }
});

const updateBlogCategory = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDb(id);
    try {
        const blogCat = await BlogCategory.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({
            status: true,
            message: 'Blog Category Updated!',
            blogCat,
        });
    } catch (error) {
        throw new Error(error);
    }
});

module.exports = {
    postBlogCategory,
    getAllBlogCategories,
    getBlogCategory,
    deleteBlogCategory,
    updateBlogCategory,
};
