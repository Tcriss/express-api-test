'use strict'

const express = require('express');
const { home, showProjects, saveProject } = require('../controllers/projects.controller');

let router = express.Router();

//routes
router.get('/', home);
router.get('/project', showProjects);
router.post('/save_project', saveProject);

module.exports = router;