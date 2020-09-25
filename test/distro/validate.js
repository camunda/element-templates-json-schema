const {
  expect
} = require('chai');


describe('validate module', function() {

  it('should expose CJS bundle', function() {

    // given
    const { validateTemplate } = require('../../dist');

    // then
    expect(validateTemplate).to.exist;
  });
});