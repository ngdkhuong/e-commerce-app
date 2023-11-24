const mongoose = require('mongoose');

const projectCatSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        slug: {
            type: String,
            required: true,
        },
    },
    {
        timestamp: true,
    },
);

module.exports = mongoose.model('ProjectCategory', projectCatSchema);
