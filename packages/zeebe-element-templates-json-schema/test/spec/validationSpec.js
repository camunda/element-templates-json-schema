const { expect } = require('chai');

const util = require('util');

const schema = require('../../resources/schema.json');

const errorMessages = require('../../resources/error-messages.json');

const {
  createValidator
} = require('../../../element-templates-json-schema-shared/test/helpers');

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

    (only ? it.only : it)('should validate template - ' + name, async function() {

      // given
      const testDefinition = await import(file);

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


    testTemplate('deprecated-bool');


    testTemplate('deprecated-invalid');


    testTemplate('deprecated-object');


    testTemplate('invalid-constraints');


    testTemplate('invalid-applies-to');


    testTemplate('entries-visible-boolean');


    testTemplate('feel');


    testTemplate('feel-type-mismatch');


    testTemplate('language');


    testTemplate('pattern-string');


    testTemplate('optional-valid');


    testTemplate('optional-invalid-type');


    testTemplate('optional-invalid-not-empty');


    testTemplate('documentation-ref');


    testTemplate('invalid-documentation-ref');


    testTemplate('element-type');


    testTemplate('element-type-no-value');


    testTemplate('element-type-invalid');


    describe('element type - event definition', function() {

      testTemplate('element-type-event-definition');


      testTemplate('element-type-event-definition-invalid');


      testTemplate('element-type-event-definition-invalid-element');
    });


    describe('property type - binding type', function() {

      testTemplate('invalid-property-type');


      testTemplate('invalid-zeebe-input-type');


      testTemplate('invalid-zeebe-output-type');


      testTemplate('invalid-zeebe-task-header-type');


      testTemplate('invalid-zeebe-task-definition-type-type');


      testTemplate('invalid-zeebe-task-definition');

    });


    describe('zeebe:property', function() {

      testTemplate('zeebe-property-type');

      testTemplate('invalid-zeebe-property-type');

    });


    describe('grouping', function() {

      testTemplate('groups');


      testTemplate('groups-missing-id');


      testTemplate('groups-missing-label');


      testTemplate('groups-wrong-open-state');

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


      testTemplate('condition-multiple');


      testTemplate('condition-empty-allMatch');


      testTemplate('condition-allMatch-one-condition');


      testTemplate('condition-dropdown-choices');


      testTemplate('condition-dropdown-choices-invalid');


      testTemplate('condition-on-itself');


      testTemplate('condition-on-itself-allMatch');


      testTemplate('condition-on-itself-dropdown-choices');
    });


    describe('message property', function() {

      testTemplate('message-property-valid');


      testTemplate('message-property-invalid');


      testTemplate('message-property-invalid-event-definition');
    });


    describe('message subscription property', function() {

      testTemplate('message-subscription-property-valid');


      testTemplate('message-subscription-property-invalid');


      testTemplate('message-subscription-property-invalid-event-definition');


      testTemplate('message-subscription-property-invalid-element-type');
    });


    describe('generated value', function() {

      testTemplate('generated-value-valid');


      testTemplate('generated-value-invalid');


      testTemplate('generated-value-clash');
    });


    describe('tooltip', function() {

      testTemplate('tooltip');

      testTemplate('tooltip-invalid');

    });


    describe('zeebe:taskDefinition', function() {


      testTemplate('zeebe-task-definition');


      testTemplate('invalid-zeebe-task-definition');

    });


    describe('zeebe:calledElement', function() {

      testTemplate('called-element');

      testTemplate('called-element-applies-to-only');

      testTemplate('called-element-invalid-applies-to-no-element-type');

      testTemplate('called-element-invalid-element-type');

      testTemplate('called-element-invalid-multiple-applies-to-no-element-type');

      testTemplate('called-element-invalid-property');

      testTemplate('called-element-missing-property');
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
