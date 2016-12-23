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
        .catch(function(error) {
            return next(error);
        });
});

router.get('/:id', function(req, res, next) {
    Movie.findById(req.params._id)
        .then(function(movie) {
            if (!movie) {
                return next(makeError(res, 'There\'s nothing to see here!', 404));
            }
            res.json(movie);
        })
        .catch(function(error) {
            return next(error);
        });
});


module.exports = router;
