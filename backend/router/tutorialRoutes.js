const tutorialRouter = require('express').Router();
const {
    postTutorial,
    getATutorial,
    updateATutorial,
    allTutorials,
    deleteTutorial,
} = require('../controller/tutorialCtrl');
const { authMiddleware, isInstructor, isAdmin } = require('../middleware/authMiddleware');

tutorialRouter.post('/post', authMiddleware, isAdmin, postTutorial);
tutorialRouter.get('/', authMiddleware, isAdmin, allTutorials);
tutorialRouter.get('/:type/:slug', getATutorial);
tutorialRouter.put('/:id', authMiddleware, isAdmin, updateATutorial);
tutorialRouter.delete('/:id', authMiddleware, isAdmin, deleteTutorial);

module.exports = tutorialRouter;
