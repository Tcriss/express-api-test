'use strict'

const express = require('express');
const { home, showProjects, getProject, saveProject, editProject, deleteProject } = require('../controllers/projects.controller');

let router = express.Router();

router.get('/', home);
router.get('/projects', showProjects);
router.post('/save-project/', saveProject);
router.get('/project/:id?', getProject);
router.put('/edit/:id?', editProject);
router.delete('/delete/:id?', deleteProject);

module.exports = router;