const {
    createPost,
    getQuestion,
    getAllQuestion,
    deleteAQuestion,
    updateQuestion,
    createAnswer,
    updateAnswer,
} = require('../controller/qna/qnaCtrl');
const { authMiddleware, restrictTo } = require('../middleware/authMiddleware');

const qnaRouter = require('express').Router();

qnaRouter.post('/post', authMiddleware, createPost);
qnaRouter.get('/post/:slug', getQuestion);
qnaRouter.get('/post', getAllQuestion);

qnaRouter.post('/post/answer/:postId', authMiddleware, createAnswer);

/* delete*/

qnaRouter.delete('/post/:postId/:quesId/:ansId', authMiddleware, deleteAQuestion);

qnaRouter.put('/post/:id', authMiddleware, updateQuestion);

qnaRouter.put('/post/answer/:id', authMiddleware, updateAnswer);

module.exports = qnaRouter;
