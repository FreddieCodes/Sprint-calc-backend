const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./src/routes/routes');

// setup app
const app = express();

// connect to mongodb
mongoose.connect('mongodb://localhost/sprintie');
mongoose.Promise = global.Promise;

// middleware
app.use(bodyParser.json());

// initialise routes
app.use(routes);

// listen to port
app.listen(process.env.port || 3000, function(){
    console.log('Listening for requests...');
});