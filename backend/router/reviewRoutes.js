const {
    createReview,
    getAllReviews,
    getAReview,
    deleteAReview,
    updateReviewStatus,
} = require('../controller/reviewCtrl');
const { authMiddleware, restrictTo } = require('../middleware/authMiddleware');
const reviewRouter = require('express').Router();

reviewRouter.post('/', authMiddleware, restrictTo('admin'), createReview);
reviewRouter.get('/', getAllReviews);
reviewRouter.get('/:id', authMiddleware, restrictTo('admin'), getAReview);
reviewRouter.delete('/:id', authMiddleware, restrictTo('admin'), deleteAReview);
reviewRouter.put('/:id', authMiddleware, restrictTo('admin'), updateReviewStatus);

module.exports = reviewRouter;
