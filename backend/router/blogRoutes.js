const blogRouter = require('express').Router();
const { createBlog, getAllBlogs, getBlog, updateBlog, deleteBlog } = require('../controller/blogCtrl');
const { authMiddleware, isAdmin } = require('../middleware/authMiddleware');

blogRouter.post('/', authMiddleware, isAdmin, createBlog);
blogRouter.get('/', getAllBlogs);
blogRouter.get('/:slug', getBlog);
blogRouter.put('/:id', authMiddleware, isAdmin, updateBlog);
blogRouter.delete('/:id', authMiddleware, isAdmin, deleteBlog);

module.exports = blogRouter;
