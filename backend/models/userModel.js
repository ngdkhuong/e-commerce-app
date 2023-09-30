const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

let userSchema = new mongoose.Schema(
    {
        // firstname: {
        //     type: String,
        //     required: true,
        // },
        // lastname: {
        //     type: String,
        //     required: true,
        // },
        email: {
            type: String,
            required: true,
            unique: true,
            index: true,
        },
        user_image: {
            type: String,
            default:
                'https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png',
        },
        // mobile: {
        //     type: String,
        //     required: true,
        //     unique: true,
        //     index: true,
        // },
        password: {
            type: String,
            required: true,
        },
        roles: {
            type: String,
            default: 'user',
        },
        // profession: {
        //     type: String,
        //     required: true,
        // },
        isBlocked: {
            type: Boolean,
            default: false,
        },
        passwordChangedAt: Date,
        passwordResetToken: String,
        passwordResetExpires: Date,
        payment_account_id: String,
        payment_seller: {},
        paymentSession: {},
    },
    {
        timestamps: true,
    },
);

userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

userSchema.methods.isPasswordMatched = async function (password) {
    return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
