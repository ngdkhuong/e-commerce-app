const { postProject, getProject, getAllProjects, updateProject, deleteProject } = require('../controller/projectCtrl');
const { authMiddleware, restrictTo } = require('../middleware/authMiddleware');

const projectRouter = require('express').Router();

projectRouter.post('/', authMiddleware, restrictTo('admin'), postProject);
projectRouter.get('/all', getAllProjects);
projectRouter.get('/:slug', authMiddleware, restrictTo('admin'), getProject);
projectRouter.put('/:id', authMiddleware, restrictTo('admin'), updateProject);
projectRouter.delete('/:id', authMiddleware, restrictTo('admin'), deleteProject);

module.exports = projectRouter;
