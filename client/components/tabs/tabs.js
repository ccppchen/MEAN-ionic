'use strict';

angular.module('fullstackApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('tabs', {
        url: '',
        abstract: true,
        templateUrl: 'components/tabs/tabs.html',
        controller: 'TabsCtrl'
      });
  });