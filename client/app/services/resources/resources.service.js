'use strict';

angular.module('fullstackApp')
  .factory('resources', function (authHttp, HOST, $rootScope) {
    // Service logic 
    // ...
    var service = {};
    service.banns = function (callback){
      authHttp.get('/api/things', {params:{limit:5}}, {cache:true}).success(function (data){
        return callback(data);
      }).error(function (data, status){
        alert('错误 ' + status);
      });
    };
    service.addBann = function (bann){
      service.banns.push(bann);
      $rootScope.$broadcast('banns.update')
    };

    service.worlds = function (callback){
      authHttp.get('/api/worlds', {params: {limit: 10, page:1 } }, {cache: true}).success(function (data){
        return callback(data);
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
