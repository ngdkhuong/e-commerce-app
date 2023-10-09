const tutorialRouter = require('express').Router();
const { postTutorial } = require('../controller/tutorialCtrl');
const { authMiddleware, isInstructor, isAdmin } = require('../middleware/authMiddleware');

tutorialRouter.post('/post', authMiddleware, isAdmin, postTutorial);

module.exports = tutorialRouter;
