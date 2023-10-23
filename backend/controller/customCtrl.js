const asyncHandler = require('express-async-handler');

const createOne = (Model) => {
    return asyncHandler(async (req, res, next) => {
        try {
            const data = await Model.create(req.body);
            res.status(200).json({
                status: true,
                message: 'Created Successfully!',
            });
        } catch (error) {
            throw new Error(error);
        }
    });
};

module.exports = { createOne };
