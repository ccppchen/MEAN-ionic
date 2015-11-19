'use strict';

describe('Service: resources', function () {

  // load the service's module
  beforeEach(module('fullstackApp'));

  // instantiate service
  var resources;
  beforeEach(inject(function (_resources_) {
    resources = _resources_;
  }));

  it('should do something', function () {
    expect(!!resources).toBe(true);
  });

});
