'use strict';

var express = require('express');
var controller = require('./world-modal.controller');

var router = express.Router();

router.post('/', controller.index);
router.get('/', controller.removeItem);

module.exports = router;