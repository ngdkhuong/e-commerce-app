const { createPost, getQuestion, getAllQuestion, deleteAQuestion } = require('../controller/qna/qnaCtrl');
const { authMiddleware, restrictTo } = require('../middleware/authMiddleware');

const qnaRouter = require('express').Router();

qnaRouter.post('/post', authMiddleware, createPost);
qnaRouter.get('/post/:slug', getQuestion);
qnaRouter.get('/post', getAllQuestion);

/* delete*/

qnaRouter.delete('/post/:postId/:quesId/:ansId', authMiddleware, deleteAQuestion);

module.exports = qnaRouter;
