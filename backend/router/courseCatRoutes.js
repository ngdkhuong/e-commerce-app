const {
    createCourseCategory,
    getAllCourseCategories,
    getCourseCategory,
    updateCourseCategory,
    deleteCourseCategory,
} = require('../controller/courseCatCtrl');
const { authMiddleware, restrictTo } = require('../middleware/authMiddleware');

const courseCatRouter = require('express').Router();

courseCatRouter.post('/', authMiddleware, restrictTo('admin', 'instructor'), createCourseCategory);
courseCatRouter.get('/all', getAllCourseCategories);
courseCatRouter.get('/:slug', authMiddleware, restrictTo('admin', 'instructor'), getCourseCategory);
courseCatRouter.put('/:id', authMiddleware, restrictTo('admin', 'instructor'), updateCourseCategory);
courseCatRouter.delete('/:id', authMiddleware, restrictTo('admin', 'instructor'), deleteCourseCategory);

module.exports = courseCatRouter;
