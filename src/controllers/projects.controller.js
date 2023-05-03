'use strict'

const projectsModel = require('../models/projects.model');

const home = (req, res) => {
    res.status(200).send({ message: 'Soy el metodo home del controlador projects' });
}

const showProjects = (req, res) => {
    projectsModel.find().then(data => {
        res.status(200).json(data);
    }).catch(err => {
        console.log(err);
        res.status(500).send(error);
    })
}

const getProject = (req, res) => {
    const ID = req.params.id;
    projectsModel.find({_id: ID}).then(data => {
        res.status(200).json(data);
    }).catch(err => {
        res.status(500).send(err);
    })
}

const saveProject = (req, res) => {
    let project = new projectsModel();

    project.name = req.body.name;
    project.description = req.body.description;
    project.category = req.body.category;
    project.techs = req.body.techs;
    project.img = null;

    project.save();
    if (project.save) {
        return res.status(200).send({
            project: project,
            message: 'project saved'
        });
    } else {
        return res.status(404).send({
            message: 'project not saved'
        });
    }
}

const editProject = (req, res) => {}

const delteProject = (res, rew) => {}

module.exports = {
    home,
    showProjects,
    getProject,
    saveProject,
    editProject,
    delteProject
};