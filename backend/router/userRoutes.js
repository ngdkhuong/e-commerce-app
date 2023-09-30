const express = require('express');
const { registerUser, loginUser, getAllUser } = require('../controller/userCtrl');
const userRouter = express.Router();

// all post routes
userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);

// all get routes
userRouter.get('/all-users', getAllUser);

module.exports = userRouter;
