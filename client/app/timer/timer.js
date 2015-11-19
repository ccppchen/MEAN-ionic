'use strict';

angular.module('fullstackApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('tabs.timer', {
        url: '/timer',
        views: {
        	'tabs-timer': {
        		templateUrl: 'app/timer/timer.html',
        		controller: 'TimerCtrl'
        	}
        }
      });
  });