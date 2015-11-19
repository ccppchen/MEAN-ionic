'use strict';

angular.module('fullstackApp')
    .factory('authHttp', function(HOST, $http) {
        var authHttp = {};

        angular.forEach(['get', 'delete', 'head', 'jsonp'], function(name) {
            authHttp[name] = function(url, config) {
                return $http[name](HOST + url, config);
            };
        });
        angular.forEach(['post', 'put'], function(name) {
            authHttp[name] = function(url, data, config) {
                return $http[name](HOST + url, data, config);
            };
        });
        return authHttp;
    });
