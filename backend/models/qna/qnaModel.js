const mongoose = require('mongoose');

const qnaSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        question: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Question',
        },
        answer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Answer',
        },
        featured: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('QNA', qnaSchema);
