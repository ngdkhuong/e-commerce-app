const docCatRouter = require('express').Router();
const {
    createDocumentCategory,
    getAllDocumentCategories,
    getDocumentCategory,
    deleteDocumentCategory,
    updateDocumentCategory,
} = require('../controller/docCatCtrl');
const { authMiddleware, restrictTo } = require('../middleware/authMiddleware');

docCatRouter.post('/', authMiddleware, restrictTo('admin'), createDocumentCategory);
docCatRouter.get('/all', getAllDocumentCategories);
docCatRouter.get('/:slug', authMiddleware, restrictTo('admin'), getDocumentCategory);
docCatRouter.put('/:id', authMiddleware, restrictTo('admin'), updateDocumentCategory);
docCatRouter.delete('/:id', authMiddleware, restrictTo('admin'), deleteDocumentCategory);

module.exports = docCatRouter;
