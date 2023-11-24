const {
    postCategory,
    updateCategory,
    deleteCategory,
    getCategory,
    getAllCategories,
} = require('../controller/projectCatCtrl');
const { authMiddleware, restrictTo } = require('../middleware/authMiddleware');

const projectCatRouter = require('express').Router();

projectCatRouter.post('/', authMiddleware, restrictTo('admin'), postCategory);
projectCatRouter.get('/all', getAllCategories);
projectCatRouter.get('/:slug', authMiddleware, restrictTo('admin'), getCategory);
projectCatRouter.put('/:id', authMiddleware, restrictTo('admin'), updateCategory);
projectCatRouter.delete('/:id', authMiddleware, restrictTo('admin'), deleteCategory);

module.exports = projectCatRouter;
