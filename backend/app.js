const express = require('express');
const app = express();

app.use('/test', (req, res) => {
    res.send('Hello World!');
});

// config
if (process.env.NODE_ENV !== 'PRODUCTION') {
    require('dotenv').config({
        path: 'config/.env',
    });
}

module.exports = app;
