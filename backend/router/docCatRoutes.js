const docCatRouter = require('express').Router();
const {
    createDocumentCategory,
    getAllDocumentCategories,
    getDocumentCategory,
    deleteDocumentCategory,
    updateDocumentCategory,
} = require('../controller/docCatCtrl');
const { authMiddleware, isAdmin } = require('../middleware/authMiddleware');

docCatRouter.post('/', authMiddleware, isAdmin, createDocumentCategory);
docCatRouter.get('/all', getAllDocumentCategories);
docCatRouter.get('/:slug', authMiddleware, isAdmin, getDocumentCategory);
docCatRouter.put('/:id', authMiddleware, isAdmin, updateDocumentCategory);
docCatRouter.delete('/:id', authMiddleware, isAdmin, deleteDocumentCategory);

module.exports = docCatRouter;
