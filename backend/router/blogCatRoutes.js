const {
    postBlogCategory,
    getAllBlogCategories,
    getABlogCat,
    updateABlogCat,
    deleteABlogCat,
} = require('../controller/blogCatCtrl');
const { authMiddleware, isAdmin } = require('../middleware/authMiddleware');

const blogCatRouter = require('express').Router();

blogCatRouter.post('/', authMiddleware, isAdmin, postBlogCategory);
blogCatRouter.get('/all', getAllBlogCategories);
blogCatRouter.get('/:slug', authMiddleware, isAdmin, getABlogCat);
blogCatRouter.put('/:id', authMiddleware, isAdmin, updateABlogCat);
blogCatRouter.delete('/:id', authMiddleware, isAdmin, deleteABlogCat);

module.exports = blogCatRouter;
