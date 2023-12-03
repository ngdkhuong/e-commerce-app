const { default: slugify } = require('slugify');
const Question = require('../../models/qna/quesModel');
const Answer = require('../../models/qna/ansModel');
const QNA = require('../../models/qna/qnaModel');
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

module.exports = {
    createPost,
    getQuestion,
    getAllQuestion,
    deleteAQuestion,
    updateQuestion,
    createAnswer,
    updateAnswer,
};
