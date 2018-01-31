const express = require('express');
const router = express.Router();
const Person = require('../models/person');

// set up routes for people model

router.get('/people', function(req, res, next){
    Person.find({}).then(function(data){
        res.send(data);
    });
});

router.post('/people', function(req, res, next){
    Person.create(req.body).then(function(data){
        res.send(data);
    }).catch(next); 
});

router.put('/people/:id', function(req, res, next){
    Person.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
            // person was updated, now send back that person data - as per convention??
            Person.findOne({_id: req.params.id}).then(function(data){
                res.send(data);
            });
        });
});

router.delete('/people/:id', function(req, res, next){
    Person.findByIdAndRemove({_id: req.params.id}).then(function(data){
        res.send(data);
    });
});

module.exports = router;