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
        function (accessToken, refreshToken, profile, cb) {
            console.log(profile);
            return cb(null, profile);
        },
    ),
);

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});
