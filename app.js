'use strict'

//imports
const express = require('express');
const bodyParser = require('body-parser');
const projectsRouter = require('./src/routes/projects.routes');

const app = express();

//middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/api-test', projectsRouter);

//export
module.exports = app;