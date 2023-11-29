const mongoose = require('mongoose');
const qnaTagSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        slug: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
            required: true,
        },
        totalQues: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('QnaTag', qnaTagSchema);
