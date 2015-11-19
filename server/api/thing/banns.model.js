'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BannSchema = new Schema({
    rout: String,
    img_rout: String,
});
var collectionName = 'banns';
module.exports = mongoose.model('Banns', BannSchema, collectionName);
