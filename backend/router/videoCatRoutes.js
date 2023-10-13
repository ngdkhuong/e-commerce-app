const {
    postVideoCategory,
    getAllVideoCategories,
    getVideoCategory,
    deleteVideoCategory,
    updateVideoCategory,
} = require('../controller/videoCatCtrl');
const { authMiddleware, isAdmin } = require('../middleware/authMiddleware');

const videoCatRouter = require('express').Router();

videoCatRouter.post('/', authMiddleware, isAdmin, postVideoCategory);
videoCatRouter.get('/all', getAllVideoCategories);
videoCatRouter.get('/:slug', authMiddleware, isAdmin, getVideoCategory);
videoCatRouter.put('/:id', authMiddleware, isAdmin, updateVideoCategory);
videoCatRouter.delete('/:id', authMiddleware, isAdmin, deleteVideoCategory);

module.exports = videoCatRouter;
