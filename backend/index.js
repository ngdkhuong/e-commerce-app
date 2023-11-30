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
const passportSetup = require('./utils/passport');
const tutCatRouter = require('./router/tutCatRoutes');
const tutorialRouter = require('./router/tutorialRoutes');
const newsletterRouter = require('./router/newsLetterRoutes');
const reviewRouter = require('./router/reviewRoutes');
const contactRouter = require('./router/contactRoutes');
const videoRouter = require('./router/videoRoutes');
const docRouter = require('./router/docRoutes');
const docCatRouter = require('./router/docCatRoutes');
const blogCatRouter = require('./router/blogCatRoutes');
const blogRouter = require('./router/blogRoutes');
const videoCatRouter = require('./router/videoCatRoutes');
const courseCatRouter = require('./router/courseCatRoutes');
const courseRouter = require('./router/courseRoutes');
const rateLimiter = require('./utils/reqLimit');
const workRouter = require('./router/workRoutes');
const projectCatRouter = require('./router/projectCatRoutes');
const projectRouter = require('./router/projectRoutes');
const bookRouter = require('./router/bookRoutes');
const qnaRoutes = require('./router/qnaRoutes');
const qnaTagRouter = require('./router/qnaTagRoutes');
const app = express();
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 5000;

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
app.get('/api/hello', (req, res) => {
    res.send('Welcome to LMS Server! Suka Blyad');
});
app.set('trust proxy', 1);

// Testing google auth
// app.get('/', (req, res) => {
//     res.send(`<a href="http://localhost:4000/google">Login With Google</a>`);
// });

app.use('/api', rateLimiter(60 * 60 * 1000, 'Seconds', 50, 'Only 50 Requests Allowed'));
app.use('/api/user', userRouter);
app.use('/', googleRouter);
app.use('/api/tutorial/category', tutCatRouter);
app.use('/api/tutorial', tutorialRouter);
app.use('/api/newsletter', newsletterRouter);
app.use('/api/review', reviewRouter);
app.use('/api/contact', contactRouter);
app.use('/api/video', videoRouter);
app.use('/api/video/category', videoCatRouter);
app.use('/api/doc/category', docCatRouter);
app.use('/api/doc', docRouter);
app.use('/api/blog/category', blogCatRouter);
app.use('/api/blog', blogRouter);
app.use('/api/course/category', courseCatRouter);
app.use('/api/course', courseRouter);
app.use('/api/work', workRouter);
app.use('/api/project/category', projectCatRouter);
app.use('/api/project', projectRouter);
app.use('/api/book-session', bookRouter);
app.use('/api/qna', qnaRoutes);
app.use('/api/qna-tag', qnaTagRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
