const {
    postBlogCategory,
    getAllBlogCategories,
    getABlogCategory,
    updateABlogCategory,
    deleteABlogCategory,
} = require('../controller/blogCatCtrl');
const { authMiddleware, isAdmin } = require('../middleware/authMiddleware');

const blogCatRouter = require('express').Router();

blogCatRouter.post('/', authMiddleware, isAdmin, postBlogCategory);
blogCatRouter.get('/all', getAllBlogCategories);
blogCatRouter.get('/:slug', authMiddleware, isAdmin, getABlogCategory);
blogCatRouter.put('/:id', authMiddleware, isAdmin, updateABlogCategory);
blogCatRouter.delete('/:id', authMiddleware, isAdmin, deleteABlogCategory);

module.exports = blogCatRouter;
