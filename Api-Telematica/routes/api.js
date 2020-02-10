const express = require ('express');
const router = express.Router();
const Arduino = require('../models/arduino');



// get a list of ninjas from the db
router.get('/arduinos', function(req, res, next){
  Arduino.geoNear(
        {type: 'Point', coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]},
        {maxDistance: 100000, spherical: true}
    ).then(function(arduinos){
        res.send(arduinos);
    }).catch(next);
});

// add a new ninja to the db
router.post('/arduinos', function(req, res, next){
    Arduino.create(req.body).then(function(arduino){
        res.send(arduino);
    }).catch(next);
});


module.exports = router;
