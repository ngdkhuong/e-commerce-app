const blogRouter = require('express').Router();
const { createBlog, getAllBlogs, getBlog, updateBlog, deleteBlog } = require('../controller/blogCtrl');
const { authMiddleware, restrictTo } = require('../middleware/authMiddleware');

blogRouter.post('/', authMiddleware, restrictTo('admin'), createBlog);
blogRouter.get('/', getAllBlogs);
blogRouter.get('/:slug', getBlog);
blogRouter.put('/:id', authMiddleware, restrictTo('admin'), updateBlog);
blogRouter.delete('/:id', authMiddleware, restrictTo('admin'), deleteBlog);

module.exports = blogRouter;
