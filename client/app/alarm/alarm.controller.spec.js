'use strict';

describe('Controller: AlarmCtrl', function () {

  // load the controller's module
  beforeEach(module('fullstackApp'));

  var AlarmCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AlarmCtrl = $controller('AlarmCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
