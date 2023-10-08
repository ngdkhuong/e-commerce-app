const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/userModel');

passport.use(
    new GoogleStrategy(
        {
            clientID: '736812878408-3ki7br602qmoepnrtp901av5ingiovi6.apps.googleusercontent.com',
            clientSecret: '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',
            callbackURL: '/auth/google/callback',
            scope: ['profile', 'email'],
        },
        async function (accessToken, refreshToken, profile, cb) {
            let data = profile?._json;
            const user = await User.findOne({ email: data.email });
            if (user) {
                console.log(user);
                return cb(null, user);
            } else {
                const newUser = await User.create({
                    username: data.name,
                    user_image: data.picture,
                    email: data.email,
                    roles: 'user',
                });
                console.log(newUser);
                return cb(null, newUser);
            }
        },
    ),
);

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});
