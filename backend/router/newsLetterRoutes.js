const { subscribe, unsubscribe } = require('../controller/newsLetterCtrl');

const newsletterRouter = require('express').Router();

newsletterRouter.post('/', subscribe);
newsletterRouter.delete('/:id', unsubscribe);

module.exports = newsletterRouter;
