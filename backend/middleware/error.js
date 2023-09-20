const ErrorHandler = require('../utils/ErrorHandler');

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || 'Internal server error';

    // wrong mongoDB if error
    if (err.name === 'CastError') {
        const message = `Resource not found with this id... Invalid ${err.path}`;
        err = new ErrorHandler(message, 400);
    }

    // Duplicate key error
    if (err.code === 11000) {
        const message = `Duplicate key ${Object.keys(err.keyValue)} entered`;
        err = new ErrorHandler(message, 400);
    }

    // wrong JWT error
    if (err.name === 'JsonWebTokenError') {
        const message = 'Bạn không được truy cập đường dẫn này. Vui lòng thử lại.';
        err = new ErrorHandler(message, 400);
    }

    // jwt expired
    if (err.name === 'TokenExpiredError') {
        const message = 'Bạn đã hết phiên đăng nhập. Vui lòng đăng nhập lại.';
        err = new ErrorHandler(message, 400);
    }

    res.status(err.statusCode).json({
        success: false,
        message: err.message,
    });
};
