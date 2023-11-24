const Project = require('../models/projectModel');
const { createOne, getOne, updateOne, getAll, deleteOne } = require('./customCtrl');

const postProject = createOne(Project);
const getProject = getOne(Project);
const getAllProjects = getAll(Project);
const updateProject = updateOne(Project);
const deleteProject = deleteOne(Project);

module.exports = { postProject, getProject, getAllProjects, updateProject, deleteProject };
