const { createPost } = require('../controller/qna/qnaCtrl');
const { authMiddleware, restrictTo } = require('../middleware/authMiddleware');

const qnaRouter = require('express').Router();

qnaRouter.post('/post', authMiddleware, restrictTo('admin'), createPost);

module.exports = qnaRouter;
