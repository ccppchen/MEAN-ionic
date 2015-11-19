'use strict';

angular.module('fullstackApp')
  .controller('ItemCtrl', function ($scope) {
    // 拖拽
    var ox,oy;
    $scope.onTouch = function($event){
        ox = $event.target.offsetLeft;
        oy = $event.target.offsetTop;
    };
    $scope.onDrag = function($event){
        var el = $event.target,
            dx = $event.gesture.deltaX,
            dy = $event.gesture.deltaY;
        el.style.left = ox + dx + "px";
        el.style.top = oy + dy + "px";
    };
  });
