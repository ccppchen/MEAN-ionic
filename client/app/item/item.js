'use strict';

angular.module('fullstackApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('tabs.tabs-world', {
        url: '/world/:itemId',
        views: {
        	'tabs-world': {
        		templateUrl: 'app/item/item.html',
        		controller: 'ItemCtrl'
        	}
        }
      });
  });