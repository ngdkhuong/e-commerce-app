const mongoose = require('mongoose'); // Erase if already required

let reviewSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        comment: {
            type: String,
            required: true,
        },
        color: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Review', reviewSchema);
