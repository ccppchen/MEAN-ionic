'use strict';

describe('Directive: hideTabs', function () {

  // load the directive's module
  beforeEach(module('fullstackApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<hide-tabs></hide-tabs>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the hideTabs directive');
  }));
});