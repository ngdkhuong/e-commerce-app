const userRouter = require('express').Router();
const {
    registerUser,
    loginUser,
    getAllUser,
    updateUser,
    deleteUser,
    getAUser,
    unblockUser,
    blockUser,
    updatePassword,
    forgotPassword,
    resetPassword,
} = require('../controller/userCtrl');
const { restrictTo, authMiddleware } = require('../middleware/authMiddleware');
const rateLimiter = require('../utils/reqLimit');

// all post routes
userRouter.post('/register', rateLimiter(60 * 60 * 1000, 2, 'Seconds', 2), registerUser);
userRouter.post('/login', loginUser);
userRouter.post('/forgot-password', forgotPassword);

// all get routes
userRouter.get('/all-users', authMiddleware, restrictTo('admin'), getAllUser);
userRouter.get('/:id', authMiddleware, getAUser);

// all put routes
userRouter.put('/update-profile', authMiddleware, updateUser);
userRouter.put('/block/:id', authMiddleware, restrictTo('admin'), blockUser);
userRouter.put('/unblock/:id', authMiddleware, restrictTo('admin'), unblockUser);
userRouter.put('/update-password', authMiddleware, updatePassword);
userRouter.put('/reset-password/:token', resetPassword);

// all delete routes
userRouter.delete('/:id', authMiddleware, restrictTo('admin'), deleteUser);

module.exports = userRouter;
