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
const { restrictTo } = require('../middleware/authMiddleware');

courseRouter.post('/', restrictTo('admin', 'instructor'), createCourse);
courseRouter.get('/instructor/all-courses', restrictTo('admin', 'instructor'), getParticularInstructorCourses);
courseRouter.get('/all', getAllCourses);
courseRouter.get('/:slug', getCourse);
courseRouter.put('/:id', restrictTo('admin', 'instructor'), updateCourse);
courseRouter.delete('/:id', restrictTo('admin', 'instructor'), deleteCourse);

/* =============== Lessons ================= */

courseRouter.post('/lesson/:courseId', restrictTo('admin', 'instructor'), createLesson);
courseRouter.delete('/lesson/:courseId/:lessonId', restrictTo('admin', 'instructor'), deleteLesson);
courseRouter.get('/lesson/:id', restrictTo('admin', 'instructor'), getLesson);
courseRouter.get('/lessons/:courseId', restrictTo('admin', 'instructor'), getAllCourseLesson);
courseRouter.put('/lesson/:lessonId', restrictTo('admin', 'instructor'), updateLesson);

module.exports = courseRouter;
