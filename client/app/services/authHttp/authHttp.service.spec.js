'use strict';

describe('Service: authHttp', function () {

  // load the service's module
  beforeEach(module('fullstackApp'));

  // instantiate service
  var authHttp;
  beforeEach(inject(function (_authHttp_) {
    authHttp = _authHttp_;
  }));

  it('should do something', function () {
    expect(!!authHttp).toBe(true);
  });

});
