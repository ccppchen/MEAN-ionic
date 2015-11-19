'use strict';

angular.module('fullstackApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('tabs.world', {
        url: '/',
        views: {
        	'tabs-world': {
        		templateUrl: 'app/world/world.html',
        		controller: 'WorldCtrl'
        	}
        }
      });
  });