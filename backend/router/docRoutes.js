const docRouter = require('express').Router();
const { createDoc, getAllDocs, getDoc, updateDoc, deleteDoc } = require('../controller/docCtrl');
const { authMiddleware, restrictTo } = require('../middleware/authMiddleware');

docRouter.post('/', authMiddleware, restrictTo('admin'), createDoc);
docRouter.get('/', getAllDocs);
docRouter.get('/:slug', getDoc);
docRouter.put('/:id', authMiddleware, restrictTo('admin'), updateDoc);
docRouter.delete('/:id', authMiddleware, restrictTo('admin'), deleteDoc);

module.exports = docRouter;
