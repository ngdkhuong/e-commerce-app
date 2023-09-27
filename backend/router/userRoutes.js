const express = require('express');
const { registerAUser } = require('../controller/userCtrl');
const userRouter = express.Router();

userRouter.post('/register', registerAUser);

module.exports = userRouter;
