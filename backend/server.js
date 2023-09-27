const express = require('express');
const dbConnect = require('./config/dbConnect');
const app = express();
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 4000;

dbConnect();

// GET testing server
app.get('/', (req, res) => {
    res.send('Welcome to LMS Server! Suka Blyad');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
