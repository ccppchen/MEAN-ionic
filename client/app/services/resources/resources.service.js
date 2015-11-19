'use strict';

angular.module('fullstackApp')
  .factory('resources', function (authHttp, HOST, $rootScope) {
    // Service logic
    // ...
    var service = {};
    service.banns = function (callback){
      authHttp.get('/api/things',[{cache:true}]).success(function (data){
        callback(data);
      }).error(function (data, status){
        alert('错误 ' + status);
      });
    };
    service.addBann = function (bann){
      service.banns.push(bann);
      $rootScope.$broadcast('banns.update')
    };

    service.worlds = function (callback){
      authHttp.get('/api/worlds', [{cache: false}]).success(function (data){
        callback(data);
      }).error(function (data, status){
        alert('错误 ' + status);
      })
    };
    service.addWorld = function (world){
      service.worlds.push(world);
      $rootScope.$broadcast('worlds.update');
    }

    // Public API here
    return service;
  });
