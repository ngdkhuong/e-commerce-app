const docCatRouter = require('express').Router();
const {
    postDocumentCategory,
    getAllDocCategories,
    getADocCat,
    deleteADocCat,
    updateADocCat,
} = require('../controller/docCatCtrl');
const { authMiddleware, isAdmin } = require('../middleware/authMiddleware');

docCatRouter.post('/', authMiddleware, isAdmin, postDocumentCategory);
docCatRouter.get('/all', getAllDocCategories);
docCatRouter.get('/:slug', authMiddleware, isAdmin, getADocCat);
docCatRouter.put('/:id', authMiddleware, isAdmin, updateADocCat);
docCatRouter.delete('/:id', authMiddleware, isAdmin, deleteADocCat);

module.exports = docCatRouter;
