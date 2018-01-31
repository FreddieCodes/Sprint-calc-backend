const express = require('express');
const router = express.Router();
const Person = require('../models/person');

// set up routes for people model

router.get('/people', function(req, res){
    res.send({type: 'GET'});
});

router.post('/people', function(req, res){
    console.log(req.body)
    Person.create(req.body).then(function(person){
        console.log(person)
        res.send(person);
    });
});

router.put('/people/:id', function(req, res){
    res.send({type: 'PUT'});
});

router.delete('/people/:id', function(req, res){
    res.send({type: 'DELETE'});
});

module.exports = router;