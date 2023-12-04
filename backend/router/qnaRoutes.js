const {
    createPost,
    getQuestion,
    getAllQuestion,
    deleteAQuestion,
    updateQuestion,
    createAnswer,
    updateAnswer,
} = require('../controller/qna/qnaCtrl');
const { createTag, updateTag, deleteTag, getAllTags, getTag } = require('../controller/qna/qnaTagCtrl');
const { authMiddleware, restrictTo } = require('../middleware/authMiddleware');

const qnaRouter = require('express').Router();

qnaRouter.post('/tag', authMiddleware, restrictTo('admin'), createTag);
qnaRouter.post('/post', authMiddleware, createPost);
qnaRouter.get('/post/:slug', getQuestion);
qnaRouter.get('/tag/:slug', getTag);
qnaRouter.get('/post', getAllQuestion);
qnaRouter.get('/tag', getAllTags);

qnaRouter.post('/post/answer/:postId', authMiddleware, createAnswer);

/* delete*/

qnaRouter.delete('/post/:postId/:quesId/:ansId', authMiddleware, deleteAQuestion);

qnaRouter.delete('/tag/:id', authMiddleware, restrictTo('admin'), deleteTag);

qnaRouter.put('/post/:id', authMiddleware, updateQuestion);
qnaRouter.put('/tag/:id', authMiddleware, restrictTo('admin', 'user'), updateTag);

qnaRouter.put('/post/answer/:id', authMiddleware, updateAnswer);

module.exports = qnaRouter;
