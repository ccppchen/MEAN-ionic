'use strict';

angular.module('fullstackApp')
  .factory('resources', function (authHttp, HOST, $rootScope) {
    // Service logic 
    // ...
    var service = {};
    var nextPage = 2;
    var hasNextPage = true;
    service.banns = function (callback){
      authHttp.get('/api/things', {params:{limit:5}}, {cache:true}).success(function (data){
        return callback(data);
      }).error(function (data, status){
        alert('错误 ' + status);
      });
    };
    service.addBann = function (bann){
      service.banns.push(bann);
      $rootScope.$broadcast('banns.update');
    };

    service.worlds = function (callback){
      authHttp.get('/api/worlds', {params: {limit: 10, page: 1 } }, {cache: true,timeout: 20000}).success(function (data){
        return callback(data);
      }).error(function (data, status){
        alert('错误 ' + status);
      })
    };
    service.addWorld = function (world){
      service.worlds.push(world);
      $rootScope.$broadcast('worlds.update');
    };

    service.hasNextPage = function (has){
      if (typeof has !== 'undefined') {
        hasNextPage = has;
      }
      return hasNextPage;
    }

    service.refresh = function (callback){
      authHttp.get('/api/worlds', {params: {limit: 10, page: 1}}, {cache: true}).success(function (data){
        nextPage = 2;
        return callback(data);
      }).error(function (data, status){
        alert("错误");
      })
    }

    service.loadMore = function (callback){
      return authHttp.get('/api/worlds', {params: {limit: 10, page: nextPage}},{cache: true}).success(function(response){
        if (response.length < 10) {
          hasNextPage = false;
        };
        nextPage++;
        return callback(response);
      })
    }


    // Public API here
    return service;
  });
