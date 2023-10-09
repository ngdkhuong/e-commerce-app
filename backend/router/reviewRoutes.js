const { createReview } = require('../controller/reviewCtrl');
const { authMiddleware, isAdmin } = require('../middleware/authMiddleware');
const reviewRouter = require('express').Router();

reviewRouter.post('/', authMiddleware, createReview);

module.exports = reviewRouter;
