'use strict'

const express = require('express');
const projectsController = require('../controllers/projects.controller');

let router = express.Router();

//routes
router.get('/', projectsController.home);
router.post('/test', projectsController.test);
router.post('/save_project', projectsController.saveProject);
router.get('/project/:id?', projectsController.getProject);

module.exports = router;