const tutCatRouter = require('express').Router();
const {
    postTutorialCategory,
    getAllTutCategories,
    getATutCat,
    deleteATutCat,
    updateATutCat,
} = require('../controller/tutCatCtrl');
const { authMiddleware, isAdmin } = require('../middleware/authMiddleware');

tutCatRouter.post('/', authMiddleware, isAdmin, postTutorialCategory);
tutCatRouter.get('/all', getAllTutCategories);
tutCatRouter.get('/:id', authMiddleware, isAdmin, getATutCat);
tutCatRouter.put('/:id', authMiddleware, isAdmin, updateATutCat);
tutCatRouter.delete('/:id', authMiddleware, isAdmin, deleteATutCat);

module.exports = tutCatRouter;
