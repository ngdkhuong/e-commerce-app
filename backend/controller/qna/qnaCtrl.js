const Question = require('../../models/qna/quesModel');
const QNA = require('../../models/qna/qnaModel');
const asyncHandler = require('express-async-handler');

const createPost = asyncHandler(async (req, res) => {
    const { id } = req.user;

    try {
    } catch (error) {
        throw new Error(error);
    }
});

module.exports = { createPost };
