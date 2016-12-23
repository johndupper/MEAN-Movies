var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var Movie = require('./models/movie');


if (process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI);
} else {
    mongoose.connect('http://localhost:3000/mean-movies');
}

mongoose.connection.on('error', function(error) {
    console.log('MongoDB connection error:' + error);
    process.exit(-1);
});

mongoose.connection.on('open', function() {
    console.log('Mongoose has connected to MongoDB.');
});


function quit() {
    console.log('Mongoose disconnecting.');
    mongoose.disconnect();
}

function handleError(error) {
    console.log('ERROR: ', error);
    quit();
    return error;
}


console.log('starting to seed database...');

Movie.remove({})
    .then(function() {
        console.log('creating new movies...');
        var starWars;
        var groundhogDay;
        var patriotGames;
    })
    .catch(handleError());









