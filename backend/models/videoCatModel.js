const mongoose = require('mongoose');

const videoCatSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        slug: {
            type: String,
            required: true,
            unique: true,
            index: true,
        },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('VideoCategory', videoCatSchema);
