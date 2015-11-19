'use strict';

describe('Directive: addAnimates', function () {

  // load the directive's module
  beforeEach(module('fullstackApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<add-animates></add-animates>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the addAnimates directive');
  }));
});