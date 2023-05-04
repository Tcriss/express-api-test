'use strict'

const projectsModel = require('../models/projects.model');

const home = (req, res) => {
    res.status(200).send({ message: "I'm home route from your API" });
}

const showProjects = (req, res) => {
    projectsModel.find().then(data => {
        res.status(200).json(data);
    }).catch(err => {
        res.status(500).send(err.message);
    });
}

const getProject = (req, res) => {
    const id = req.params.id;
    projectsModel.find({_id: id}).then(data => {
        res.status(200).json(data);
    }).catch(err => {
        res.status(500).send(err.message);
    });
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
        return res.status(404).send({ message: 'project not saved' });
    }
}

const editProject = (req, res) => {
    const id = req.params.id;
    const update = req.body;

    projectsModel.findByIdAndUpdate( id, update,{new: true}).then(data =>{
        res.status(200).json(data);
    }).catch(err =>{
        res.status(500).send(err.message);
    });
}

const deleteProject = (req, res) => {
    const id = req.params.id;

    projectsModel.findByIdAndDelete(id).then(data =>{
        res.status(200).send({message: 'project deleted succesfully'});
    }).catch(err =>{
        res.status(500).send(err.message);
    });
}

module.exports = {
    home,
    showProjects,
    getProject,
    saveProject,
    editProject,
    deleteProject
};