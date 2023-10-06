const express = require('express');
const dbConnect = require('./config/dbConnect');
const { notFound, errorHandler } = require('./middleware/errorHandler');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const passport = require('passport');
const userRouter = require('./router/userRoutes');
const googleRouter = require('./router/googleRoutes');
const app = express();
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 5000;
const passportSetup = require('./utils/passport');

dbConnect();
/* This code snippet is configuring and setting up a session middleware for the Express.js application. */
app.use(
    session({
        resave: false,
        saveUninitialized: false,
        secret: 'mysecret',
        store: MongoStore.create({
            mongoUrl: process.env.MONGO_URL,
            ttl: 12 * 60 * 60,
        }),
    }),
);

app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware for handling CORS POLICY
app.use(
    cors({
        // origin: 'https://it-courses-client.vercel.app',
        origin: 'http://localhost:3000',
        credentials: true,
    }),
);

// GET testing server
app.get('/api/test', (req, res) => {
    res.send('Welcome to LMS Server! Suka Blyad');
});

// Testing google auth
// app.get('/', (req, res) => {
//     res.send(`<a href="http://localhost:4000/google">Login With Google</a>`);
// });

app.use('/api/user', userRouter);
app.use('/', googleRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
