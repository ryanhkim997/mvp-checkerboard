const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Board', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Connected to Mongo.'));

module.exports = db;