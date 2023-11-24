const Doc = require('../models/docModel');
const { createOne, getOne, updateOne, getAll, deleteOne } = require('./customCtrl');

// create or post doc
const createDoc = createOne(Doc);

// get a doc
const getDoc = getOne(Doc);

// get all doc
const getAllDocs = getAll(Doc);

// update a doc
const updateDoc = updateOne(Doc);

// delete a doc
const deleteDoc = deleteOne(Doc);

module.exports = {
    createDoc,
    getDoc,
    getAllDocs,
    updateDoc,
    deleteDoc,
};
