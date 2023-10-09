const {
    createContact,
    getAllContacts,
    getAContact,
    deleteAContact,
    updateContactStatus,
} = require('../controller/contactCtrl');
const { authMiddleware, isAdmin } = require('../middleware/authMiddleware');
const contactRouter = require('express').Router();

contactRouter.post('/', authMiddleware, isAdmin, createContact);
contactRouter.get('/', getAllContacts);
contactRouter.get('/:id', authMiddleware, isAdmin, getAContact);
contactRouter.delete('/:id', authMiddleware, isAdmin, deleteAContact);
contactRouter.put('/:id', authMiddleware, isAdmin, updateContactStatus);

module.exports = contactRouter;
