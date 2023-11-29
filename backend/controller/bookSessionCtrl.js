const { createOne, updateOne, deleteOne, getOne, getAll } = require('./customCtrl');
const BookSession = require('../models/sessionModel');

const postSession = createOne(BookSession);
const getSession = getOne(BookSession);
const getAllSessions = getAll(BookSession);
const updateSession = updateOne(BookSession);
const deleteSession = deleteOne(BookSession);

module.exports = { postSession, getSession, getAllSessions, updateSession, deleteSession };