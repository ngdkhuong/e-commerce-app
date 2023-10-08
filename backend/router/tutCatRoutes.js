const tutCatRouter = require('express').Router();
const { postTutorialCategory } = require('../controller/tutCatCtrl');

tutCatRouter.post('/post-tutorial', postTutorialCategory);

module.exports = tutCatRouter;
