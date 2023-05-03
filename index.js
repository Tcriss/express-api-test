'use strict'

const mongoose = require('mongoose');
const app = require('./app');

app.set('port',2000);

mongoose.connect('mongodb+srv://cristiantejeda14:tr.1993001193@test0.dfd495l.mongodb.net/portfolio')
.then(()=>{
    console.log('Connection established successfully');

    //server starting
    app.listen(app.get('port'), ()=>{
        console.log(`Server running on: http://localhost:${app.get('port')}`);
    })
})
.catch(err => console.log(err));