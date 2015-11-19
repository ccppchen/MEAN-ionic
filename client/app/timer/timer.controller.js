'use strict';

angular.module('fullstackApp')
  .controller('TimerCtrl', function ($scope, $ionicFilterBar) {
    $ionicFilterBar.show({
        // items: $scope.items,
        cancelText: '取消',
        update: function (filteredItems, filterText) {
          
        }
      });
  });
