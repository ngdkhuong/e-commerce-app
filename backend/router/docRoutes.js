const docRouter = require('express').Router();
const { createDoc, getAllDocs, getDoc, updateDoc, deleteDoc } = require('../controller/docCtrl');
const { authMiddleware, isAdmin } = require('../middleware/authMiddleware');

docRouter.post('/', authMiddleware, isAdmin, createDoc);
docRouter.get('/', getAllDocs);
docRouter.get('/:slug', getDoc);
docRouter.put('/:id', authMiddleware, isAdmin, updateDoc);
docRouter.delete('/:id', authMiddleware, isAdmin, deleteDoc);

module.exports = docRouter;
