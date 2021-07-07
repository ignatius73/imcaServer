const express = require('express');
const Alumno = require('../../models/alumno');
const _ = require('underscore');
const app = express();


app.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});




module.exports = app;