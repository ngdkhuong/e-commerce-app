const {
    postVideoCategory,
    getAllVideoCategories,
    getVideoCategory,
    deleteVideoCategory,
    updateVideoCategory,
} = require('../controller/videoCatCtrl');
const { authMiddleware, restrictTo } = require('../middleware/authMiddleware');

const videoCatRouter = require('express').Router();

videoCatRouter.post('/', authMiddleware, restrictTo('admin', 'instructor'), postVideoCategory);
videoCatRouter.get('/all', getAllVideoCategories);
videoCatRouter.get('/:slug', authMiddleware, restrictTo('admin', 'instructor'), getVideoCategory);
videoCatRouter.put('/:id', authMiddleware, restrictTo('admin', 'instructor'), updateVideoCategory);
videoCatRouter.delete('/:id', authMiddleware, restrictTo('admin', 'instructor'), deleteVideoCategory);

module.exports = videoCatRouter;
