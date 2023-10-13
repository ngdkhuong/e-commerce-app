const mongoose = require('mongoose');

let courseSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            trim: true,
            minLength: 3,
            maxLength: 255,
            required: true,
        },
        slug: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
            minLength: 3,
            maxLength: 5000,
        },
        price: {
            type: Number,
            default: 0,
        },
        image: {
            type: String,
            default: 'https://climate.onep.go.th/wp-content/uploads/2020/01/default-image.jpg',
        },
        category: {
            type: String,
            required: true,
        },
        published: {
            type: Boolean,
            default: false,
        },
        paid: {
            type: Boolean,
            default: false,
        },
        instructor: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'User',
            required: true,
        },
        lessons: [
            {
                type: mongoose.SchemaTypes.ObjectId,
                ref: 'Lesson',
            },
        ],
        totalHours: {
            type: String,
            default: 0,
        },
        enrolls: {
            type: String,
            default: 0,
        },
        ratings: [
            {
                stars: Number,
                comment: String,
                postedBy: {
                    type: mongoose.SchemaTypes.ObjectId,
                    ref: 'User',
                },
            },
        ],
        totalRatings: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Course', courseSchema);
