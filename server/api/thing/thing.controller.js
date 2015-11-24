/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var banns = require('./banns.model');

// Get list of things
exports.index = function(req, res) {
    banns.find({}, null, {limit: req.query.limit, sort: {_id:1} }, function(err, data) {
        if (err) { return handleError(res, err) };
        return res.status(200).json(data);
    }); 
};
