const express = require('express');
const ErrorHandler = require('./utils/ErrorHandler');
const app = express();
const cookieParser = require('cookie-parser');

app.use('/test', (req, res) => {
    res.send('Hello World!');
});

// config
if (process.env.NODE_ENV !== 'PRODUCTION') {
    require('dotenv').config({
        path: 'config/.env',
    });
}

app.use(express.json());

// Handle Error
app.use(ErrorHandler);

// Cookie parser
app.use(cookieParser());

module.exports = app;
