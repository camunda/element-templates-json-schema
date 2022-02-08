import { expect } from 'chai';

import util from 'util';

import schema from '../../resources/cloud.json';

import {
  createValidator
} from '../helpers';

const validator = createValidator(schema);


describe('validation - cloud', function() {

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


    testTemplate('invalid-binding-type-cloud');


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


    testTemplate('pattern-string');


    testTemplate('cloud-optional-inputs-outputs');


    testTemplate('cloud-optional-invalid-type');


    testTemplate('cloud-optional-invalid-not-empty');


    describe('property type - binding type', function() {

      testTemplate('invalid-property-type');


      testTemplate('invalid-zeebe-input-type');


      testTemplate('invalid-zeebe-output-type');


      testTemplate('invalid-zeebe-task-header-type');


      testTemplate('invalid-zeebe-task-definition-type-type');

    });


    describe('grouping', function() {

      testTemplate('groups');


      testTemplate('groups-missing-id');


      testTemplate('groups-missing-label');

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
