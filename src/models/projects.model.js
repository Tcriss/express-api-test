'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

let projectSchema = schema({
    name: String,
    description: String,
    category:String,
    techs: String,
    img: String
});

module.exports = mongoose.model('Project',projectSchema);