const express = require('express');
const InterestsRouter = express.Router();

InterestsRouter.route('/')
    .all((_req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((_req, res) => {
        res.end('Will send all my Interests to you');
    })

module.exports = InterestsRouter;