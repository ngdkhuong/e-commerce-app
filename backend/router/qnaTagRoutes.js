const { createTag, getTag, getAllTags, updateTag, deleteTag } = require('../controller/qna/qnaTagCtrl');
const { authMiddleware, restrictTo } = require('../middleware/authMiddleware');

const qnaTagRouter = require('express').Router();

qnaTagRouter.post('/', authMiddleware, createTag);
qnaTagRouter.get('/all', getAllTags);
qnaTagRouter.get('/:slug', authMiddleware, getTag);
qnaTagRouter.put('/:id', authMiddleware, updateTag);
qnaTagRouter.delete('/:id', authMiddleware, deleteTag);

module.exports = qnaTagRouter;
