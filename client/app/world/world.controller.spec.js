'use strict';

describe('Controller: WorldCtrl', function () {

  // load the controller's module
  beforeEach(module('fullstackApp'));

  var WorldCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WorldCtrl = $controller('WorldCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
