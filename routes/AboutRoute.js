const express = require('express');
const AboutRouter = express.Router();

AboutRouter.route('/')
    .all((_req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((_req, res) => {
        res.end('Will send all my info to you');
    })

module.exports = AboutRouter;