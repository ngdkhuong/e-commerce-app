const { default: slugify } = require('slugify');
const Question = require('../../models/qna/quesModel');
const Answer = require('../../models/qna/ansModel');
const QNA = require('../../models/qna/qnaModel');
const QnaTag = require('../../models/qna/tagModel');
const QnaComment = require('../../models/qna/qnaCommentModel');
const asyncHandler = require('express-async-handler');
const validateMongoDb = require('../../config/validateMongoDb');
const { getOne, getAll, deleteOne, updateOne } = require('../customCtrl');

const createPost = asyncHandler(async (req, res) => {
    const { id } = req.user;
    validateMongoDb(id);
    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title.toLowerCase());
        }
        if (req.body.tags) {
            req.body.tags.forEach(async (element) => {
                const updateTagCount = await QnaTag.findByIdAndUpdate(
                    element,
                    {
                        $inc: {
                            totalQues: +1,
                        },
                    },
                    { new: true },
                );
            });
        }

        const newQues = await Question.create(req.body);
        const post = await QNA.create({
            user: id,
            question: newQues?._id,
            slug: req.body.slug,
        });
        res.status(200).json({ status: true, message: 'Create Successfully!', post });
    } catch (error) {
        throw new Error(error);
    }
});

const createAnswer = asyncHandler(async (req, res) => {
    const { id } = req.user;
    const { postId } = req.params;
    validateMongoDb(id);
    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title.toLowerCase());
        }
        const data = {
            user: id,
            ...req.body,
        };

        const newAnswer = await Answer.create(req.body);
        const post = await QNA.findByIdAndUpdate(
            postId,
            {
                answer: newAnswer?._id,
            },
            { new: true },
        );
        res.status(200).json({ status: true, message: 'Create Successfully!', post });
    } catch (error) {
        throw new Error(error);
    }
});

const updateQuestion = updateOne(Question);

const updateAnswer = updateOne(Answer);

const getQuestion = getOne(QNA, 'question answer');

const getAllQuestion = getAll(QNA, 'question answer');

const deleteAQuestion = asyncHandler(async (req, res) => {
    const { postId, quesId, ansId } = req.params;
    console.log(postId, quesId, ansId);
    validateMongoDb(postId);
    validateMongoDb(quesId);
    if (ansId && ansId !== 'null') validateMongoDb(ansId);
    try {
        const deletePost = await QNA.findByIdAndDelete(postId);
        const deleteQues = await Question.findByIdAndDelete(quesId);
        if (ansId && ansId !== 'null') await Answer.findByIdAndDelete(ansId);
        res.status(200).json({ status: true, message: 'Deleted' });
    } catch (error) {
        throw new Error(error);
    }
});

const addComment = asyncHandler(async (req, res) => {
    const { quesId } = req.params;
    const { id } = req.user;
    validateMongoDb(id);
    validateMongoDb(quesId);
    try {
        const createComment = await QnaComment.create({ user: id, comment: req.body.comment });
        const findQues = await Question.findByIdAndUpdate(
            quesId,
            { $push: { comments: createComment._id } },
            { new: true },
        );
        res.status(200).json({ status: true, message: 'Comment Posted!' });
    } catch (error) {
        throw new Error(error);
    }
});

const deleteComment = asyncHandler(async (req, res) => {
    const { quesId, commentId } = req.params;
    const { id } = req.user;
    validateMongoDb(id);
    validateMongoDb(quesId);
    try {
        const delComment = await QnaComment.findByIdAndDelete(commentId);
        const findQues = await Question.findByIdAndUpdate(quesId, { $pull: { comments: commentId } }, { new: true });
        res.status(200).json({ status: true, message: 'Comment Deleted!' });
    } catch (error) {
        throw new Error(error);
    }
});

const updateComment = asyncHandler(async (req, res) => {
    try {
    } catch (error) {
        throw new Error(error);
    }
});

module.exports = {
    createPost,
    getQuestion,
    getAllQuestion,
    deleteAQuestion,
    updateQuestion,
    createAnswer,
    updateAnswer,
    addComment,
    deleteComment,
};
