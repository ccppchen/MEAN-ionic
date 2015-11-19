'use strict';

describe('Controller: TabsCtrl', function () {

  // load the controller's module
  beforeEach(module('fullstackApp'));

  var TabsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TabsCtrl = $controller('TabsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
