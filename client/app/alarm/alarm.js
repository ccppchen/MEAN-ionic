'use strict';

angular.module('fullstackApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('tabs.alarm', {
        url: '/alarm',
        views: {
        	'tabs-alarm': {
        		templateUrl: 'app/alarm/alarm.html',
        		controller: 'AlarmCtrl'
        	}
        }
      });
  });