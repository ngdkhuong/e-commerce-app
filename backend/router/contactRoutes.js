const {
    createContact,
    getAllContacts,
    getAContact,
    deleteAContact,
    updateContactStatus,
} = require('../controller/contactCtrl');
const { authMiddleware, restrictTo } = require('../middleware/authMiddleware');
const contactRouter = require('express').Router();

contactRouter.post('/', authMiddleware, restrictTo('admin'), createContact);
contactRouter.get('/', getAllContacts);
contactRouter.get('/:id', authMiddleware, restrictTo('admin'), getAContact);
contactRouter.delete('/:id', authMiddleware, restrictTo('admin'), deleteAContact);
contactRouter.put('/:id', authMiddleware, restrictTo('admin'), updateContactStatus);

module.exports = contactRouter;
