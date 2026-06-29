const { expect } = require('chai');

const schema = require('../../resources/schema.json');

const {
  createValidator
} = require('../../../element-templates-json-schema-shared/test/helpers');

const validator = createValidator(schema);

// configuration templates extracted from the credential-enabled connector
// element templates (see ../../../zeebe-element-templates-json-schema/test/integration)
const templates = require('./configuration-templates.json');

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

    it(`should validate configuration template <${ template.name }>`, async function() {

      // when
      const {
        valid,
        errors
      } = validateTemplate(template);

      if (!valid) {
        console.error(`Validation errors for configuration template <${ template.name }>:`, errors);
      }

      // then
      expect(valid).to.be.true;
      expect(errors).to.be.null;
    });

  });

});
