const tutCatRouter = require('express').Router();
const {
    postTutorialCategory,
    getAllTutCategories,
    getATutCat,
    deleteATutCat,
    updateATutCat,
} = require('../controller/tutCatCtrl');
const { authMiddleware, restrictTo } = require('../middleware/authMiddleware');

tutCatRouter.post('/', authMiddleware, restrictTo('admin'), postTutorialCategory);
tutCatRouter.get('/all', getAllTutCategories);
tutCatRouter.get('/:id', authMiddleware, restrictTo('admin'), getATutCat);
tutCatRouter.put('/:id', authMiddleware, restrictTo('admin'), updateATutCat);
tutCatRouter.delete('/:id', authMiddleware, restrictTo('admin'), deleteATutCat);

module.exports = tutCatRouter;
