'use strict';

describe('Controller: StopwatchCtrl', function () {

  // load the controller's module
  beforeEach(module('fullstackApp'));

  var StopwatchCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StopwatchCtrl = $controller('StopwatchCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
