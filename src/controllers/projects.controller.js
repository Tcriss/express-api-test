'use strict'

const projectsModel = require('../models/projects.model');

let controller = {
    home: (req, res) => {
        res.status(200).send({message:'Soy el metodo home del controlador projects'});
    },
    test: (req, res) => {
        res.status(200).send({message:'Soy el metodo test del controlador projects'});
    },
    getProject: (req, res) => {
        let ID = req.params.id;
        let project = projectsModel.find({_id: ID}).exec();

        if (id == null) return res.status(404).send({message:'project not found'});
        if (!project) return res.status(404).send({message: 'project not found'});

        return res.status(200).send({project});
    },
    saveProject: (req, res)=>{
        let project = new projectsModel();

        project.name = req.body.name;
        project.description = req.body.description;
        project.category = req.body.category;
        project.techs = req.body.techs;
        project.img = null;

        project.save();
        if(project.save){
            return res.status(200).send({
                project: project,
                message: 'project saved'
            });
        } else {
            return res.status(404).send({
                message: 'project not saved'
            });
        }
    },
    editProject: (req, res) =>{

    },
    delteProject: (res, rew) =>{

    }
};

module.exports = controller;