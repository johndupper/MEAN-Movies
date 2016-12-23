var express = require('express');
var router = express.Router();
var Movie = require('../models/movie');


function makeError(res, message, status) {
    res.statusCode = status;
    var error = new Error(message);
    error.status = status;
    return error;
}


router.get('/', function(req, res, next) {
    Movie.find({}).sort('-createdAt')
        .then(function(allMovies) {
            res.json(allMovies);
        })
        .catch(makeError);
});






module.exports = router;
