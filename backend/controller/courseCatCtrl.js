const CourseCategory = require('../models/courseCatModel');
const { createOne, getOne, getAll, updateOne, deleteOne } = require('./customCtrl');

// create or post courseCat
const createCourseCategory = createOne(CourseCategory);

// get a courseCat
const getCourseCategory = getOne(CourseCategory);

// get all courseCat
const getAllCourseCategories = getAll(CourseCategory);

// update a CourseCategory
const updateCourseCategory = updateOne(CourseCategory);

// delete a CourseCategory
const deleteCourseCategory = deleteOne(CourseCategory);

module.exports = {
    createCourseCategory,
    getCourseCategory,
    getAllCourseCategories,
    updateCourseCategory,
    deleteCourseCategory,
};
