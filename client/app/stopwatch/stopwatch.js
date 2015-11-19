'use strict';

angular.module('fullstackApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('tabs.stopwatch', {
        url: '/stopwatch',
        views: {
        	'tabs-stopwatch': {
        		templateUrl: 'app/stopwatch/stopwatch.html',
        		controller: 'StopwatchCtrl'
        	}
        }
        
      });
  });