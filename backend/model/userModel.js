const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    user_image: {
        type: String,
        default: '',
    },
    email,
});
