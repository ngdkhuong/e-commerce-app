const videoRouter = require('express').Router();
const { createVideo, getVideo, getAllVideos, updateVideo, deleteVideo } = require('../controller/videoCtrl');
const { authMiddleware, restrictTo } = require('../middleware/authMiddleware');

videoRouter.post('/', authMiddleware, restrictTo('admin'), createVideo);
videoRouter.get('/', getAllVideos);
videoRouter.get('/:slug', getVideo);
videoRouter.put('/:id', authMiddleware, restrictTo('admin'), updateVideo);
videoRouter.delete('/:id', authMiddleware, restrictTo('admin'), deleteVideo);

module.exports = videoRouter;
