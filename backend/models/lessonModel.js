const mongoose = require('mongoose');

let lessonSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            minLength: 3,
            maxLength: 350,
        },
        slug: {
            type: String,
            required: true,
            unique: true,
        },
        content: {
            type: String,
            minLength: 200,
        },
        video: {
            type: String,
        },
        free_preview: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true },
);

module.exports = mongoose.model('Lesson', lessonSchema);
