'use strict'

const mongoose = require('mongoose');
const app = require('./app');

const port = 2000;

mongoose.connect('mongodb+srv://cristiantejeda14:tr.1993001193@test0.dfd495l.mongodb.net/portfolio')
.then(()=>{
    //server starting
    app.listen(port, ()=>{
        console.log(`Server running on: http://localhost:${port}/api-test`);
    })
})
.catch(err => console.log(err));