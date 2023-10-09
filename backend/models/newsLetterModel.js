const mongoose = require('mongoose'); // Erase if already required

let newsletterSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
    },
    {
        timestamps: true,
    },
);

//Export the model
module.exports = mongoose.model('Newsletter', newsletterSchema);
