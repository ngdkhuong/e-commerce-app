const Work = require('../models/workWithUsModel');
const asyncHandler = require('express-async-handler');
const validateMongoDb = require('../config/validateMongoDb');
const { createOne } = require('./customCtrl');

const postDetails = createOne(Work);

module.exports = { postDetails };
