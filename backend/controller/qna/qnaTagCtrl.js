const QnaTag = require('../../models/qna/tagModel');
const { createOne, getAll, getOne, updateOne, deleteOne } = require('../customCtrl');

const createTag = createOne(QnaTag);
const getTag = getOne(QnaTag);
const getAllTags = getAll(QnaTag);
const updateTag = updateOne(QnaTag);
const deleteTag = deleteOne(QnaTag);

module.exports = { createTag, getTag, getAllTags, updateTag, deleteTag };
