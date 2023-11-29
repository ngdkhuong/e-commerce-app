const {
    postSession,
    getSession,
    getAllSessions,
    updateSession,
    deleteSession,
} = require('../controller/bookSessionCtrl');
const { authMiddleware, restrictTo } = require('../middleware/authMiddleware');

const bookRouter = require('express').Router();

bookRouter.post('/', authMiddleware, restrictTo('admin'), postSession);
bookRouter.get('/all', getAllSessions);
bookRouter.get('/:id', authMiddleware, restrictTo('admin'), getSession);
bookRouter.put('/:id', authMiddleware, restrictTo('admin'), updateSession);
bookRouter.delete('/:id', authMiddleware, restrictTo('admin'), deleteSession);

module.exports = bookRouter;
