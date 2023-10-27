const Work = require('../models/workWithUsModel');
const { createOne, updateOne, deleteOne, getOne, getAll } = require('./customCtrl');

const postDetail = createOne(Work);
const updateDetail = updateOne(Work);
const deleteDetail = deleteOne(Work);
const getDetail = getOne(Work);
const getAllDetail = getAll(Work);

module.exports = { postDetail, updateDetail, deleteDetail, getDetail, getAllDetail };
