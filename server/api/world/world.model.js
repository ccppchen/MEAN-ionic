'use strict';
var moment = require('moment');
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var WorldSchema = new Schema({
	city: String,
	time: {type: String, default: moment().format('YYYY-MM-DD HH:mm')},
	img_rout: String
});

module.exports = mongoose.model('World', WorldSchema);