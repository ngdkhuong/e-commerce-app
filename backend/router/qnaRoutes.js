const { createPost, getQuestion, getAllQuestion, deleteAQuestion } = require('../controller/qna/qnaCtrl');
const { authMiddleware, restrictTo } = require('../middleware/authMiddleware');

const qnaRouter = require('express').Router();

qnaRouter.post('/', authMiddleware, createPost);
qnaRouter.get('/:slug', getQuestion);
qnaRouter.get('/', getAllQuestion);

/* delete*/

qnaRouter.delete('/:postId/:quesId/:answerId', authMiddleware, deleteAQuestion);

module.exports = qnaRouter;
