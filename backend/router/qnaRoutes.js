const { authMiddleware, restrictTo } = require('../middleware/authMiddleware');

const qnaRouter = require('express').Router();

qnaRouter.post('/post', authMiddleware, restrictTo(), createPost);

module.exports = qnaRouter;
