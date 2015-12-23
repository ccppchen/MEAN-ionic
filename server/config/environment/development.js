'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/fullstack-dev',
    options: {
	  	user: 'fullstack',
	  	pass: '362531'
	  }
  },
  
  seedDB: false
};
