const {
    postBlogCategory,
    getAllBlogCategories,
    getBlogCategory,
    deleteBlogCategory,
    updateBlogCategory,
} = require('../controller/blogCatCtrl');
const { authMiddleware, restrictTo } = require('../middleware/authMiddleware');

const blogCatRouter = require('express').Router();

blogCatRouter.post('/', authMiddleware, restrictTo('admin'), postBlogCategory);
blogCatRouter.get('/all', getAllBlogCategories);
blogCatRouter.get('/:slug', authMiddleware, restrictTo('admin'), getBlogCategory);
blogCatRouter.put('/:id', authMiddleware, restrictTo('admin'), updateBlogCategory);
blogCatRouter.delete('/:id', authMiddleware, restrictTo('admin'), deleteBlogCategory);

module.exports = blogCatRouter;
