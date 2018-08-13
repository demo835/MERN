const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/api-translations");

mongoose.Promise = Promise

module.exports = mongoose