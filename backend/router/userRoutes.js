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
const { isAdmin, authMiddleware } = require('../middleware/authMiddleware');

// all post routes
userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.post('/forgot-password', forgotPassword);

// all get routes
userRouter.get('/all-users', authMiddleware, isAdmin, getAllUser);
userRouter.get('/:id', authMiddleware, getAUser);

// all put routes
userRouter.put('/update-profile', authMiddleware, updateUser);
userRouter.put('/block/:id', authMiddleware, isAdmin, blockUser);
userRouter.put('/unblock/:id', authMiddleware, isAdmin, unblockUser);
userRouter.put('/update-password', authMiddleware, updatePassword);
userRouter.put('/reset-password/:token', resetPassword);

// all delete routes
userRouter.delete('/:id', authMiddleware, isAdmin, deleteUser);

module.exports = userRouter;
