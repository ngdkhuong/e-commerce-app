const {
    createReview,
    getAllReviews,
    getAReview,
    deleteAReview,
    updateReviewStatus,
} = require('../controller/reviewCtrl');
const { authMiddleware, isAdmin } = require('../middleware/authMiddleware');
const reviewRouter = require('express').Router();

reviewRouter.post('/', authMiddleware, isAdmin, createReview);
reviewRouter.get('/', getAllReviews);
reviewRouter.get('/:id', authMiddleware, isAdmin, getAReview);
reviewRouter.delete('/:id', authMiddleware, isAdmin, deleteAReview);
reviewRouter.put('/:id', authMiddleware, isAdmin, updateReviewStatus);

module.exports = reviewRouter;
