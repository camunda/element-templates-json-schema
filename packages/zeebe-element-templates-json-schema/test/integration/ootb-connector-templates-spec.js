const { expect } = require('chai');

const schema = require('../../resources/schema.json');

const errorMessages = require('../../resources/error-messages.json');

const {
  createValidator
} = require('../../../element-templates-json-schema-shared/test/helpers');

const validator = createValidator(schema, errorMessages);

const templates = require('./ootb-connector-templates.json');

function validateTemplate(template) {

  const valid = validator(template);

  const errors = validator.errors;

  return {
    valid,
    errors
  };
}

describe('validation', function() {

  templates.forEach(function(template) {

    it(`should validate template <${ template.name }>`, async function() {

      // when
      const {
        valid,
        errors
      } = validateTemplate(template);

      if (!valid) {
        console.error(`Validation errors for template <${ template.name }>:`, errors);
      }

      // then
      expect(valid).to.be.true;
      expect(errors).to.be.null;
    });

  });

});
