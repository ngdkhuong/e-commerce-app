const {
    postBlogCategory,
    getAllBlogCategories,
    getBlogCategory,
    deleteBlogCategory,
    updateBlogCategory,
} = require('../controller/blogCatCtrl');
const { authMiddleware, isAdmin } = require('../middleware/authMiddleware');

const blogCatRouter = require('express').Router();

blogCatRouter.post('/', authMiddleware, isAdmin, postBlogCategory);
blogCatRouter.get('/all', getAllBlogCategories);
blogCatRouter.get('/:slug', authMiddleware, isAdmin, getBlogCategory);
blogCatRouter.put('/:id', authMiddleware, isAdmin, updateBlogCategory);
blogCatRouter.delete('/:id', authMiddleware, isAdmin, deleteBlogCategory);

module.exports = blogCatRouter;
