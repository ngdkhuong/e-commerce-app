const workRouter = require('express').Router();
const { postDetails } = require('../controller/workCtrl');
const { authMiddleware, restrictTo } = require('../middleware/authMiddleware');

workRouter.post('/', authMiddleware, restrictTo('admin'), postDetails);

module.exports = workRouter;
