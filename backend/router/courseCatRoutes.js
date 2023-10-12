const {
    createCourseCategory,
    getAllCourseCategories,
    getCourseCategory,
    updateCourseCategory,
    deleteCourseCategory,
} = require('../controller/courseCatCtrl');
const { authMiddleware, isAdmin, isBoth } = require('../middleware/authMiddleware');

const courseCatRouter = require('express').Router();

courseCatRouter.post('/', authMiddleware, isBoth, createCourseCategory);
courseCatRouter.get('/all', getAllCourseCategories);
courseCatRouter.get('/:slug', authMiddleware, isBoth, getCourseCategory);
courseCatRouter.put('/:id', authMiddleware, isBoth, updateCourseCategory);
courseCatRouter.delete('/:id', authMiddleware, isBoth, deleteCourseCategory);

module.exports = courseCatRouter;
