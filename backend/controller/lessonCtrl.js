const { default: slugify } = require('slugify');
const Lesson = require('../models/lessonModel');
const Course = require('../models/courseModel');
const asyncHandler = require('express-async-handler');
const validateMongoDb = require('../config/validateMongoDb');

const createLesson = asyncHandler(async (req, res) => {
    const { courseId } = req.params;

    try {
        const findCourse = await Course.findById(courseId);
        if (findCourse) {
            if (req.body.title) {
                req.body.slug = slugify(req.body.title.toLowerCase());
            }
            const lesson = await Lesson.create(req.body);
            await Course.findByIdAndUpdate(courseId, { $push: { lessons: lesson._id } }, { new: true });
            res.status(200).json({
                status: true,
                message: 'Lesson Added to the Course',
                lesson,
            });
        }
    } catch (error) {
        throw new Error('No Course exists with this ID');
    }
});

const deleteLesson = asyncHandler(async (req, res) => {
    const { courseId, lessonId } = req.params;
    validateMongoDb(courseId);
    validateMongoDb(lessonId);
    try {
        const findCourse = await Course.findByIdAndUpdate(courseId, { $pull: { lessons: lessonId } }, { new: true });
        const findLesson = await Lesson.findByIdAndDelete(lessonId);
        res.status(200).json({
            status: true,
            message: 'Lesson deleted',
        });
    } catch (error) {
        throw new Error(error);
    }
});

const getLesson = asyncHandler(async (req, res) => {
    const { lessonId } = req.params;
    validateMongoDb(lessonId);
    try {
        const lesson = await Lesson.findOne({ lesson: lessonId });
        res.status(200).json({
            status: true,
            message: 'Get Lesson Details',
            lesson,
        });
    } catch (error) {
        throw new Error(error);
    }
});

const getAllCourseLesson = asyncHandler(async (req, res) => {
    const { courseId } = req.params;
    validateMongoDb(courseId);
    try {
        const lessons = await Course.find().where({ _id: courseId }).select('lessons');
        res.status(200).json({
            status: true,
            message: 'Get Lesson Details',
            lessons,
        });
    } catch (error) {
        throw new Error(error);
    }
});

const updateLesson = asyncHandler(async (req, res) => {
    const { lessonId } = req.params;
    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title.toLowerCase());
        }

        const lesson = await Lesson.findByIdAndUpdate(lessonId, req.body, { new: true });
        res.status(200).json({
            status: true,
            message: 'Updated Lesson',
            lesson,
        });
    } catch (error) {
        throw new Error(error);
    }
});

module.exports = {
    createLesson,
    deleteLesson,
    getLesson,
    getAllCourseLesson,
    updateLesson,
};
