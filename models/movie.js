var mongoose = require('mongoose');
// mongoose.Promise = require('bluebird');

var MovieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    genre: { type: String, required: true }
},
    { timestamps: true }
);

module.exports = mongoose.model('Movie', MovieSchema);
