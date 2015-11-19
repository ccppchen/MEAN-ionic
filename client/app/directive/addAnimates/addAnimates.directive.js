'use strict';

angular.module('fullstackApp')
  .directive('addAnimates', function () {
    return {
      restrict: 'A',
      link: function (scope, element) {
        element.on('tap', function() {
        	element.parent().parent().css({'height': 0, 'min-height': 0});
        })
        
      }
    };
  });