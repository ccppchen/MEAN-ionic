'use strict';
var moment = require('moment');
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var WorldSchema = new Schema({
	city: String,
	time: {type: String, default: new moment().format('YYYY-MM-DD HH:mm:ss')},
	img_rout: {type: String, default: '../../assets/images/1.jpg'}
});

module.exports = mongoose.model('World', WorldSchema);