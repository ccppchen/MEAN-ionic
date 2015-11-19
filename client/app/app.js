'use strict';

// Ionic Starter App
angular.module('fullstackApp', ['ionic', 'jett.ionic.filter.bar', 'ionicScroller'])
// 设置后台ip地址
.constant('HOST', 'http://localhost:9000')

// .run(function($ionicPlatform) {
//   $ionicPlatform.ready(function() {
//     // for form inputs)
//     if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
//       cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
//       cordova.plugins.Keyboard.disableScroll(true);

//     }
//     if (window.StatusBar) {
//       // org.apache.cordova.statusbar required
//       StatusBar.styleLightContent();
//     }
//   });
// })
.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider,$locationProvider,$httpProvider, $ionicFilterBarConfigProvider) {
  $ionicConfigProvider.platform.ios.tabs.style('standard'); 
  $ionicConfigProvider.platform.ios.tabs.position('bottom');
  $ionicConfigProvider.platform.android.tabs.style('standard');
  $ionicConfigProvider.platform.android.tabs.position('bottom');
  $ionicConfigProvider.platform.ios.navBar.alignTitle('center'); 
  $ionicConfigProvider.platform.android.navBar.alignTitle('center');
  $ionicConfigProvider.platform.ios.backButton.text('返回').previousTitleText(false).icon('ion-ios-arrow-left');
  $ionicConfigProvider.platform.android.backButton.text('返回').previousTitleText(false).icon('ion-android-arrow-back');        
  $ionicConfigProvider.platform.ios.views.transition('ios');
  $ionicConfigProvider.platform.android.views.transition('android');

  // 设置http请求头
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
  $httpProvider.defaults.headers.common.Accept = 'application/api.fullstackApp.v1+json';
  // 使angularjs支持cors跨域
  $httpProvider.defaults.useXDomain = true;
  // 搜索框设置
  $ionicFilterBarConfigProvider.theme('assertive');
  $ionicFilterBarConfigProvider.backdrop(false);
  $ionicFilterBarConfigProvider.placeholder('搜索');
  /*
  $ionicFilterBarConfigProvider.theme('assertive');
  $ionicFilterBarConfigProvider.clear('ion-close');
  $ionicFilterBarConfigProvider.search('ion-search');
  $ionicFilterBarConfigProvider.backdrop(false);
  $ionicFilterBarConfigProvider.transition('vertical');
  $ionicFilterBarConfigProvider.placeholder('Filter');
  */

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider
  	.otherwise('/');
  	
  $locationProvider.html5Mode(true);

});
