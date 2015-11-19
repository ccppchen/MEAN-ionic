'use strict';

angular.module('fullstackApp')
  .directive('mClear', function () {
    return {
      restrict: 'A',
      replace: true,
      link: function (scope, element, attrs) {
      	var eInput = element.find('input');
      	var eI = element.find('i');
      	element.find('span').css('visibility', 'hidden');
      	element.find('span').on('touchstart', function() {
      	     // 清空输入框
      	     eInput.val('');
      	});
      	eInput.on('focus', function (){
      		eI.addClass('active');
      		element.find('span').css('visibility', 'inherit');
      	});
      	eInput.on('blur', function (){
      		if (eInput.val() === '') {
      			eI.removeClass('active');
      			element.find('span').css('visibility', 'hidden');
      		} else{
      			element.find('span').css('visibility', 'inherit');
      		};
      	});
      }
    };
  })
  .directive('clearIcon', function () {
    return {
      restrict: 'E',
      replace: true,
      template: '<span class="icon ion-ios-close placeholder-icon" style="left:auto; right:5px;"></span>'
    };
  });