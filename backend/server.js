const app = require('./app');
const connectDatabase = require('./db/Database');

// Handling uncaught Exception
process.on('uncaughtException', (error) => {
    console.error(`Error: ${error.message}`);
    // Perform any necessary cleanup or logging here
    process.exit(1); // Exit the application with an error code
});

// config
if (process.env.NODE_ENV !== 'PRODUCTION') {
    require('dotenv').config({
        path: 'config/.env',
    });
}

// Connect Database
connectDatabase();

// Create server
const server = app.listen(process.env.PORT, () => {
    console.log(`Server running at http://localhost:${process.env.PORT}`);
});

// unhandled promise rejection
process.on('unhandledRejection', (err) => {
    console.log(`Shutting down the server for ${err.message}`);
    console.log('Shutting down the server for unhandled promise rejection');

    server.close(() => {
        process.exit(1);
    });
});
