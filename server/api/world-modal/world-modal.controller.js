'use strict';

var _ = require('lodash');
var World = require('../world/world.model');

// Get list of world-modals
exports.index = function(req, res) {
  World.create({ city: req.body.params.city, time: req.body.params.time }, function(err, doc){
  	if(err){
  		res.send(err);
  	}else{
  		res.send(true);
  	}
  });
};
exports.removeItem = function (req, res) {
	World.remove({ _id: req.param('_id') }, function (error){
		if (error) {
			res.send(err);
		}else{
			res.send(req.params.city);
		}
	})
};