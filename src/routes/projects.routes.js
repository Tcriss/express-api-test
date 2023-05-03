'use strict'

const express = require('express');
const { home, showProjects, getProject, saveProject } = require('../controllers/projects.controller');

let router = express.Router();

//routes
router.get('/', home);
router.get('/projects', showProjects);
router.post('/save_project/', saveProject);
router.get('/get-project/:id?', getProject)

module.exports = router;