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

    testTemplate('cloud-rest-connector');


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


    testTemplate('missing-binding-zeebe-output-source');


    testTemplate('missing-binding-zeebe-input-name');


    testTemplate('missing-binding-zeebe-header-key');


    testTemplate('with-version');


    testTemplate('invalid-version');


    testTemplate('constraints');


    testTemplate('invalid-constraints');


    testTemplate('invalid-applies-to');


    testTemplate('entries-visible-boolean');


    testTemplate('feel');


    testTemplate('feel-type-mismatch');


    testTemplate('pattern-string');


    testTemplate('optional-inputs-outputs');


    testTemplate('optional-invalid-type');


    testTemplate('optional-invalid-not-empty');


    testTemplate('documentation-ref');


    testTemplate('invalid-documentation-ref');


    testTemplate('element-type');


    testTemplate('element-type-no-value');


    testTemplate('element-type-invalid');


    describe('property type - binding type', function() {

      testTemplate('invalid-property-type');


      testTemplate('invalid-zeebe-input-type');


      testTemplate('invalid-zeebe-output-type');


      testTemplate('invalid-zeebe-task-header-type');


      testTemplate('invalid-zeebe-task-definition-type-type');

    });


    describe('zeebe:property', function() {

      testTemplate('zeebe-property-type');

      testTemplate('invalid-zeebe-property-type');

    });


    describe('grouping', function() {

      testTemplate('groups');


      testTemplate('groups-missing-id');


      testTemplate('groups-missing-label');

    });


    describe('icons', function() {

      testTemplate('icon');


      testTemplate('icon-https');


      testTemplate('icon-encoded-url');


      testTemplate('invalid-icon-raw-svg');


      testTemplate('invalid-icon-malformed-data-uri');


      testTemplate('invalid-icon-missing-contents');

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
