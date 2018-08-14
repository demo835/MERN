const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/cerner");

mongoose.Promise = Promise

module.exports = mongoose