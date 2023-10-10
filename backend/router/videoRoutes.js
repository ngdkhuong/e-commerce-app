const videoRouter = require('express').Router();
const { createVideo, getAllVideos, getVideo, updateVideo, deleteVideo } = require('../controller/videoCtrl');
const { authMiddleware, isAdmin } = require('../middleware/authMiddleware');

videoRouter.post('/', authMiddleware, isAdmin, createVideo);
videoRouter.get('/', getAllVideos);
videoRouter.get('/:slug', getVideo);
videoRouter.put('/:id', authMiddleware, isAdmin, updateVideo);
videoRouter.delete('/:id', authMiddleware, isAdmin, deleteVideo);

module.exports = videoRouter;
