const Contact = require('../models/contactModel');
const asyncHandler = require('express-async-handler');
const validateMongoDb = require('../config/validateMongoDb');
const User = require('../models/userModel');

// Create Review
const createContact = asyncHandler(async (req, res) => {
    try {
        const contact = await Contact.create(req.body);

        res.status(200).json({
            status: true,
            message: 'Enquiry Form Submit Successfully!',
        });
    } catch (error) {
        throw new Error(error);
    }
});

const getAllContacts = asyncHandler(async (req, res) => {
    try {
        const contact = await Contact.find();

        res.status(200).json({
            status: true,
            message: 'Enquiries Fetched Successfully!',
            contact,
        });
    } catch (error) {
        throw new Error(error);
    }
});

const getAContact = asyncHandler(async (req, res) => {
    const { id } = req.params;

    try {
        const contact = await Contact.findById(id);

        res.status(200).json({
            status: true,
            message: 'Enquiry Found!',
            contact,
        });
    } catch (error) {
        throw new Error(error);
    }
});

const deleteAContact = asyncHandler(async (req, res) => {
    const { id } = req.params;

    try {
        const contact = await Contact.findByIdAndDelete(id);

        res.status(200).json({
            status: true,
            message: 'Enquiry Deleted Successfully!',
        });
    } catch (error) {
        throw new Error(error);
    }
});

const updateContactStatus = asyncHandler(async (req, res) => {
    const { id } = req.params;

    try {
        const contact = await Contact.findByIdAndUpdate(id, { status: req.body.status }, { new: true });

        res.status(200).json({
            status: true,
            message: 'Enquiry Updated Successfully!',
        });
    } catch (error) {
        throw new Error(error);
    }
});

module.exports = {
    createContact,
    getAllContacts,
    getAContact,
    deleteAContact,
    updateContactStatus,
};
