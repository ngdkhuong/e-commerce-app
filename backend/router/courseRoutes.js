const {
    createCourse,
    getParticularInstructorCourses,
    getAllCourses,
    getCourse,
    updateCourse,
    deleteCourse,
} = require('../controller/courseCtrl');
const { createLesson, deleteLesson, getLesson, getAllCourseLesson, updateLesson } = require('../controller/lessonCtrl');

const courseRouter = require('express').Router();
const { authMiddleware, isBoth } = require('../middleware/authMiddleware');

courseRouter.post('/', authMiddleware, isBoth, createCourse);
courseRouter.get('/instructor/all-courses', authMiddleware, isBoth, getParticularInstructorCourses);
courseRouter.get('/all', getAllCourses);
courseRouter.get('/:slug', getCourse);
courseRouter.put('/:id', authMiddleware, isBoth, updateCourse);
courseRouter.delete('/:id', authMiddleware, isBoth, deleteCourse);

/* =============== Lessons ================= */

courseRouter.post('/lesson/:courseId', authMiddleware, isBoth, createLesson);
courseRouter.delete('/lesson/:courseId/:lessonId', authMiddleware, isBoth, deleteLesson);
courseRouter.get('/lesson/:id', authMiddleware, isBoth, getLesson);
courseRouter.get('/lessons/:courseId', authMiddleware, isBoth, getAllCourseLesson);
courseRouter.put('/lesson/:lessonId', authMiddleware, isBoth, updateLesson);

module.exports = courseRouter;
