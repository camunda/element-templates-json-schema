import { expect } from 'chai';

import util from 'util';

import schema from '../../resources/schema.json';

import errorMessages from '../../resources/error-messages.json';

import {
  createValidator
} from '../../../element-templates-json-schema-shared/test/helpers';

const validator = createValidator(schema, errorMessages);


describe('validation', function() {

  function validateTemplate(template) {

    const valid = validator(template);

    const errors = validator.errors;

    return {
      valid,
      errors
    };
  }

  function testTemplate(name, file, only = false) {

    if (!file) {
      file = `../fixtures/${name}.js`;
    }

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


  describe('single template', function() {

    testTemplate('mail-task');


    testTemplate('async-awesome-task');


    testTemplate('missing-type');


    testTemplate('missing-applies-to');


    testTemplate('missing-template-name');


    testTemplate('missing-template-id');


    testTemplate('missing-properties');


    testTemplate('missing-binding');


    testTemplate('applies-to-single');


    testTemplate('number-value');


    testTemplate('additional-property');


    testTemplate('invalid-binding-type');


    testTemplate('choices-missing-value');


    testTemplate('choices-missing-name');


    testTemplate('missing-choices');


    testTemplate('missing-binding-name');


    testTemplate('missing-binding-source');


    testTemplate('missing-binding-variables-target');


    testTemplate('camunda-in-binding');


    testTemplate('camunda-in-binding-local');


    testTemplate('camunda-in-binding-local-expression');


    testTemplate('invalid-camunda-out');


    testTemplate('invalid-camunda-out-overloaded');


    testTemplate('camunda-out-binding');


    testTemplate('camunda-out-binding-local');


    testTemplate('camunda-out-binding-local-expression');


    testTemplate('camunda-execution-listener');


    testTemplate('with-version');


    testTemplate('invalid-version');


    testTemplate('multiple-errors');


    testTemplate('error-task');


    testTemplate('error-task-multiple');


    testTemplate('missing-binding-errorRef');


    testTemplate('constraints');


    testTemplate('invalid-constraints');


    testTemplate('invalid-applies-to');


    testTemplate('entries-visible-boolean');


    testTemplate('entries-visible-deprecated');


    testTemplate('pattern-string');


    testTemplate('documentation-ref');


    testTemplate('invalid-documentation-ref');


    testTemplate('element-type');


    testTemplate('element-type-no-value');


    testTemplate('element-type-invalid');


    describe('property type - binding type', function() {

      testTemplate('invalid-property-type');


      testTemplate('invalid-camunda-property-type');


      testTemplate('invalid-input-parameter-type');


      testTemplate('invalid-output-parameter-type');


      testTemplate('invalid-camunda-in-type');


      testTemplate('invalid-camunda-in-business-key-type');


      testTemplate('invalid-camunda-out-type');


      testTemplate('invalid-execution-listener-type');


      testTemplate('invalid-field-type');


      testTemplate('invalid-camunda-error-event-definition-type');

    });


    describe('scoped binding', function() {

      testTemplate('scope-connector-legacy');


      testTemplate('scope-invalid-legacy');


      testTemplate('scope-connector-missing-binding-legacy');


      testTemplate('scope-connector');


      testTemplate('scope-missing-binding');


      testTemplate('scopes-multiple');


      testTemplate('scope-missing-type');


      testTemplate('scope-invalid-type');


      testTemplate('scope-missing-properties');


      testTemplate('scope-missing-error-id');

    });


    describe('grouping', function() {

      testTemplate('groups');


      testTemplate('groups-missing-id');


      testTemplate('groups-missing-label');

    });


    describe('condition', function() {

      testTemplate('condition');


      testTemplate('condition-missing-property');


      testTemplate('condition-missing-condition-keyword');


      testTemplate('condition-wrong-types');


      testTemplate('condition-default-type');


      testTemplate('condition-wrong-type');
    });

  });


  describe('multiple templates', function() {

    testTemplate('multiple-mail-tasks');


    testTemplate('single-template-in-array');


    testTemplate('invalid-multiple-mail-tasks');


    testTemplate('complex');


    testTemplate('rpa-templates');

  });

});


// helpers /////////////////

// eslint-disable-next-line no-unused-vars
function printNested(object) {
  console.log(util.inspect(object, {
    showHidden: false,
    depth: null,
    colors: true
  }));
}
