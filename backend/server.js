const express = require('express');
const dbConnect = require('./config/dbConnect');
const { notFound, errorHandler } = require('./middleware/errorHandler');
const userRouter = require('./router/userRoutes');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 4000;

dbConnect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware for handling CORS POLICY
app.use(
    cors({
        origin: 'http://localhost:5173',
        credentials: true,
    }),
);

// GET testing server
app.get('/api/test', (req, res) => {
    res.send('Welcome to LMS Server! Suka Blyad');
});

app.use('/api/user', userRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
