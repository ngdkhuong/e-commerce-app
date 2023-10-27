const workRouter = require('express').Router();
const { postDetail, updateDetail, deleteDetail, getDetail, getAllDetail } = require('../controller/workCtrl');
const { authMiddleware, restrictTo } = require('../middleware/authMiddleware');

workRouter.post('/', postDetail);
workRouter.put('/:id', authMiddleware, restrictTo('admin'), updateDetail);
workRouter.delete('/:id', authMiddleware, restrictTo('admin'), deleteDetail);
workRouter.get('/:id', authMiddleware, restrictTo('admin'), getDetail);
workRouter.get('/', authMiddleware, restrictTo('admin'), getAllDetail);

module.exports = workRouter;
