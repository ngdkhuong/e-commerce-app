const {
    createCourse,
    getParticularInstructorCourses,
    getAllCourses,
    getCourse,
    updateCourse,
    deleteCourse,
} = require('../controller/courseCtrl');

const courseRouter = require('express').Router();
const { authMiddleware, isBoth } = require('../middleware/authMiddleware');

courseRouter.post('/', authMiddleware, isBoth, createCourse);
courseRouter.get('/instructor/all-courses', authMiddleware, isBoth, getParticularInstructorCourses);
courseRouter.get('/all', getAllCourses);
courseRouter.get('/:slug', getCourse);
courseRouter.put('/:id', authMiddleware, isBoth, updateCourse);
courseRouter.delete('/:id', authMiddleware, isBoth, deleteCourse);

module.exports = courseRouter;
