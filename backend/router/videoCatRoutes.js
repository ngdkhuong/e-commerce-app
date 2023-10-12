const {
    postVideoCategory,
    getAllVideoCategories,
    getAVideoCat,
    updateAVideoCat,
    deleteAVideoCat,
} = require('../controller/videoCatCtrl');
const { authMiddleware, isAdmin } = require('../middleware/authMiddleware');

const videoCatRouter = require('express').Router();

videoCatRouter.post('/', authMiddleware, isAdmin, postVideoCategory);
videoCatRouter.get('/all', getAllVideoCategories);
videoCatRouter.get('/:slug', authMiddleware, isAdmin, getAVideoCat);
videoCatRouter.put('/:id', authMiddleware, isAdmin, updateAVideoCat);
videoCatRouter.delete('/:id', authMiddleware, isAdmin, deleteAVideoCat);

module.exports = videoCatRouter;
