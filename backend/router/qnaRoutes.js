const { createPost, getQuestion } = require('../controller/qna/qnaCtrl');
const { authMiddleware, restrictTo } = require('../middleware/authMiddleware');

const qnaRouter = require('express').Router();

qnaRouter.post('/post', authMiddleware, createPost);
qnaRouter.get('/post/:slug', getQuestion);

module.exports = qnaRouter;
