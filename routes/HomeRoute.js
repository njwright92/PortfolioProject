const express = require('express');
const HomeRouter = express.Router();

HomeRouter.route('/')
    .all((_req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((_req, res) => {
        res.end('my homepage');
    })
    .post((req, res) => {
        res.end(`Will add the Home site request form: ${req.body.name} with description: ${req.body.description}`);
    })

module.exports = HomeRouter;