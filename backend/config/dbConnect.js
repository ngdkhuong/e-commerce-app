const mongoose = require('mongoose');

const dbConnect = () => {
    try {
        const connection = mongoose.connect('mongodb://mongo-db/LMS');
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log(error);
    }
};

module.exports = dbConnect;
