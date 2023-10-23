const tutorialRouter = require('express').Router();
const {
    postTutorial,
    getATutorial,
    updateATutorial,
    allTutorials,
    deleteTutorial,
} = require('../controller/tutorialCtrl');
const { authMiddleware, restrictTo } = require('../middleware/authMiddleware');

tutorialRouter.post('/post', authMiddleware, restrictTo('admin', 'instructor'), postTutorial);
tutorialRouter.get('/', authMiddleware, restrictTo('admin', 'instructor'), allTutorials);
tutorialRouter.get('/:type/:slug', getATutorial);
tutorialRouter.put('/:id', authMiddleware, restrictTo('admin', 'instructor'), updateATutorial);
tutorialRouter.delete('/:id', authMiddleware, restrictTo('admin', 'instructor'), deleteTutorial);

module.exports = tutorialRouter;
