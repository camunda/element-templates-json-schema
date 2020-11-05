import { expect } from 'chai';

import schema from '../../resources/schema.json';

import {
  createValidator
} from '../helpers';

describe('validation', function() {

  function validateTemplate(template) {
    const validator = createValidator(schema);

    const valid = validator(template);

    const errors = validator.errors;

    return {
      valid,
      errors
    };
  }

  function testTemplate(name, file, only = false) {

    (only ? it.only : it)('should validate template - ' + name, function() {

      // given
      const testDefinition = require(file);

      const {
        errors: expectedErrors,
        template
      } = testDefinition;

      // when
      const {
        errors
      } = validateTemplate(template);

      // then
      expect(errors).to.eql(expectedErrors);
    });
  }

  // eslint-disable-next-line no-unused-vars
  function testOnly(name, file) {
    return testTemplate(name, file, true);
  }


  testTemplate('mail-task', '../fixtures/mail-task.js');


  testTemplate('async-awesome-task', '../fixtures/async-awesome-task.js');


  testTemplate('missing-applies-to', '../fixtures/missing-applies-to.js');


  testTemplate('missing-binding', '../fixtures/missing-binding.js');


  testTemplate('applies-to-single', '../fixtures/applies-to-single.js');


  testTemplate('invalid-type', '../fixtures/invalid-type.js');


  testTemplate('number-value', '../fixtures/number-value.js');


  testTemplate('additional-property', '../fixtures/additional-property.js');


  testTemplate('invalid-binding-type', '../fixtures/invalid-binding-type.js');


  testTemplate('choices-missing-value', '../fixtures/choices-missing-value.js');


  testTemplate('choices-missing-name', '../fixtures/choices-missing-name.js');


  testTemplate('missing-choices', '../fixtures/missing-choices.js');


  testTemplate('missing-binding-name', '../fixtures/missing-binding-name.js');


  testTemplate('missing-binding-source', '../fixtures/missing-binding-source.js');


  testTemplate('missing-binding-variables-target', '../fixtures/missing-binding-variables-target.js');


  testTemplate('camunda-in-binding', '../fixtures/camunda-in-binding.js');


  testTemplate('invalid-camunda-out', '../fixtures/invalid-camunda-out.js');


  testTemplate('camunda-out-binding', '../fixtures/camunda-out-binding.js');


  testTemplate('invalid-camunda-execution-listener', '../fixtures/invalid-camunda-execution-listener.js');


  testTemplate('camunda-execution-listener', '../fixtures/camunda-execution-listener.js');


  testTemplate('with-version', '../fixtures/with-version.js');


  testTemplate('invalid-version', '../fixtures/invalid-version.js');


  testTemplate('multiple-errorrs', '../fixtures/multiple-errors.js');

});