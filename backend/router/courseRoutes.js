const { createCourse } = require('../controller/courseCtrl');

const courseRouter = require('express').Router();
const { authMiddleware, isBoth } = require('../middleware/authMiddleware');

courseRouter.post('/', authMiddleware, isBoth, createCourse);

module.exports = courseRouter;
