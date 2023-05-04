'use strict'

const mongoose = require('mongoose');
const app = require('./app');
const db = require('./config.example.json')

const port = 2000;

mongoose.connect(db.database)
.then(()=>{
    //server starting
    app.listen(port, ()=>{
        console.log(`Server running on: http://localhost:${port}/api-test`);
    })
})
.catch(err => console.log(err));