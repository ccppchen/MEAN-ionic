'use strict';

var _ = require('lodash');
var moment = require('moment');
var World = require('./world.model');
// World.find({}).remove(function() {
//     World.create(
//         {
//             city: '北京',
//             time: moment().format('YYYY-MM-DD HH:mm:ss'),
//             img_rout: '../../assets/images/2.jpg'
//         }, {
//             city: '抚州',
//             time: moment().format('YYYY-MM-DD HH:mm:ss'),
//             img_rout: '../../assets/images/2.jpg'
//         }, {
//             city: '南昌',
//             time: moment().format('YYYY-MM-DD HH:mm:ss'),
//             img_rout: '../../assets/images/2.jpg'
//         }, {
//             city: '上海',
//             time: moment().format('YYYY-MM-DD HH:mm:ss'),
//             img_rout: '../../assets/images/2.jpg'
//         }, {
//             city: '广州',
//             time: moment().format('YYYY-MM-DD HH:mm:ss'),
//             img_rout: '../../assets/images/2.jpg'
//         }
//     )
// })

// Get list of worlds
exports.index = function(req, res) {
    World.find({}, null, {limit: req.query.limit, skip: (req.query.page-1)*10, sort: {time: -1}}, function(err, data) {
        if (err) {
            return handleError(res, req)
        };
        return res.status(200).json(data);
    });

};

