var mongoose = require('mongoose');
var schema = require('../database/schema');
var model = mongoose.model('admin',schema);

module.exports = model;