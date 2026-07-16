const { expect } = require('chai');

const schema = require('../../resources/schema.json');

const {
  createValidator
} = require('../../../element-templates-json-schema-shared/test/helpers');

const validator = createValidator(schema);

// we save this for some other shenanigans
const iit = it;

function createTest(name, file, it) {

  if (!file) {
    file = `../fixtures/${name}.js`;
  }

  it(name, async function() {

    // given
    const {
      template,
      valid: expectedValid
    } = await import(file);

    // when
    const valid = validator(template);

    // then
    expect(
      valid,
      `expected template to be ${expectedValid ? 'valid' : 'invalid'}, errors:\n${JSON.stringify(validator.errors, null, 2)}`
    ).to.equal(expectedValid);
  });
}


describe('validation', function() {

  function it(name, file) {
    return createTest(name, file, iit);
  }

  it.only = function only(name, file) {
    return createTest(name, file, iit.only);
  };

  it.skip = function skip(name, file) {
    return createTest(name, file, iit.skip);
  };

  describe('should accept valid configuration templates', function() {

    it('valid-credential');


    it('valid-minimal');


    it('valid-template-list');


    it('valid-isEmpty-condition');

  });


  describe('should reject invalid configuration templates', function() {

    it('missing-kind');


    it('missing-version');


    it('missing-name');


    it('configuration-type-not-allowed');


    it('feel-not-supported');


    it('invalid-binding-type');


    it('binding-missing-name');

  });

});
