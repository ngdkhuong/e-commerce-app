const { default: slugify } = require('slugify');
const Question = require('../../models/qna/quesModel');
const QNA = require('../../models/qna/qnaModel');
const asyncHandler = require('express-async-handler');
const validateMongoDb = require('../../config/validateMongoDb');

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
        });
        res.status(200).json({ status: true, message: 'Create Successfully!', post });
    } catch (error) {
        throw new Error(error);
    }
});

const getQuestion = asyncHandler(async (req, res) => {
    const { slug } = req.params;

    try {
        const findPost = await QNA.findOne({ question: { slug: slug } });
        res.status(200).json({ status: true, message: 'Found', findPost });
    } catch (error) {
        throw new Error(error);
    }
});

module.exports = { createPost, getQuestion };
