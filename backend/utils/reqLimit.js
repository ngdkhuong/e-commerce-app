const rateLimit = require('express-rate-limit');

function rateLimiter(time, timeType, maxReq, message) {
    let limit = rateLimit({
        windowMs: time ? time : 15 * 60 * 1000,
        max: maxReq ? maxReq : 50,
        standardHeaders: true,
        legacyHeaders: false,
        message: {
            status: false,
            code: 'TOO_MANY_REQUESTS',
            message:
                message +
                    ` , Too Many Requests, Please try again after ${time ? time + ' ' + timeType : '15 minutes'}` ||
                `Too Many Requests, Please try again after ${time ? time + ' ' + timeType : '15 minutes'}`,
        },
    });

    return limit;
}

module.exports = rateLimiter;
