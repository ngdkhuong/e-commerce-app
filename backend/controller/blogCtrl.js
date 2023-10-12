const { default: slugify } = require('slugify');
const Blog = require('../models/blogModel');
const asyncHandler = require('express-async-handler');
const validateMongoDb = require('../config/validateMongoDb');

// create or post blog
const createBlog = asyncHandler(async (req, res) => {
    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title.toLowerCase());
        }

        const blog = await Blog.create(req.body);
        res.status(200).json({
            status: true,
            message: 'blog created successfully!',
            blog,
        });
    } catch (error) {
        throw new Error(error);
    }
});

// get a blog
const getBlog = asyncHandler(async (req, res) => {
    const { slug } = req.params;

    try {
        const blog = await Blog.findOne({ slug: slug });
        res.status(200).json({
            status: true,
            message: 'Blog Found!',
            blog,
        });
    } catch (error) {
        throw new Error(error);
    }
});

// get all blog
const getAllBlogs = asyncHandler(async (req, res) => {
    try {
        const blog = await Blog.find();
        res.status(200).json({
            status: true,
            message: 'Blogs Fetched Successfully!',
            blog,
        });
    } catch (error) {
        throw new Error(error);
    }
});

// update a Blog
const updateBlog = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDb(id);

    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title.toLowerCase());
        }
        const blog = await Blog.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({
            status: true,
            message: 'Blog Updated Successfully!',
            blog,
        });
    } catch (error) {
        throw new Error(error);
    }
});

// delete a Blog
const deleteBlog = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDb(id);
    try {
        const blog = await Blog.findByIdAndDelete(id);
        res.status(200).json({
            status: true,
            message: 'Blog Deleted!',
        });
    } catch (error) {
        throw new Error(error);
    }
});

module.exports = {
    createBlog,
    getBlog,
    getAllBlogs,
    updateBlog,
    deleteBlog,
};
