const { expect } = require('chai');

const util = require('util');

const schema = require('../../resources/schema.json');

const errorMessages = require('../../resources/error-messages.json');

const {
  createValidator
} = require('../../../element-templates-json-schema-shared/test/helpers');

const validator = createValidator(schema, errorMessages);

// we save this for some other shinanigans
const iit = it;

function validateTemplate(template) {

  const valid = validator(template);

  const errors = validator.errors;

  return {
    valid,
    errors
  };
}

function createTest(name, file, it) {

  if (!file) {
    file = `../fixtures/${name}.js`;
  }

  it(name, async function() {

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


  describe('should validate single template', function() {

    it('cloud-rest-connector');


    it('missing-type');


    it('missing-applies-to');


    it('missing-template-name');


    it('missing-template-id');


    it('missing-properties');


    it('missing-binding');


    it('applies-to-single');


    it('number-value');


    it('additional-property');


    it('invalid-binding-type');


    it('choices-missing-value');


    it('choices-missing-name');


    it('missing-choices');


    it('missing-binding-zeebe-output-source');


    it('missing-binding-zeebe-input-name');


    it('missing-binding-zeebe-header-key');


    it('with-version');


    it('invalid-version');


    it('constraints');


    it('deprecated-bool');


    it('deprecated-invalid');


    it('deprecated-object');


    it('invalid-constraints');


    it('invalid-applies-to');


    it('entries-visible-boolean');


    it('feel');


    it('feel-type-mismatch');


    it('feel-value-mismatch');


    it('language');


    it('pattern-string');


    it('optional-valid');


    it('optional-invalid-type');


    it('optional-invalid-not-empty');


    it('documentation-ref');


    it('invalid-documentation-ref');


    it('element-type');


    it('element-type-no-value');


    it('element-type-invalid');


    describe('element type - event definition', function() {

      it('element-type-event-definition');


      it('element-type-event-definition-invalid');


      it('element-type-event-definition-invalid-element');
    });


    describe('property type - binding type', function() {

      it('invalid-property-type');


      it('invalid-zeebe-input-type');


      it('invalid-zeebe-output-type');


      it('invalid-zeebe-task-header-type');


      it('invalid-zeebe-task-definition-type-type');


      it('invalid-zeebe-task-definition');

    });


    describe('zeebe:property', function() {

      it('zeebe-property-type');

      it('invalid-zeebe-property-type');

    });


    describe('grouping', function() {

      it('groups');


      it('groups-missing-id');


      it('groups-missing-label');


      it('groups-wrong-open-state');

    });


    describe('icons', function() {

      it('icon');


      it('icon-https');


      it('icon-encoded-url');


      it('invalid-icon-raw-svg');


      it('invalid-icon-malformed-data-uri');


      it('invalid-icon-missing-contents');

    });


    describe('condition', function() {

      it('condition');


      it('condition-missing-property');


      it('condition-missing-condition-keyword');


      it('condition-wrong-types');


      it('condition-default-type');


      it('condition-wrong-type');


      it('condition-multiple');


      it('condition-empty-allMatch');


      it('condition-allMatch-one-condition');


      it('condition-dropdown-choices');


      it('condition-dropdown-choices-invalid');


      it('condition-on-itself');


      it('condition-on-itself-allMatch');


      it('condition-on-itself-dropdown-choices');
    });


    describe('message property', function() {

      it('message-property-valid');


      it('message-property-invalid');


      it('message-property-invalid-event-definition');
    });


    describe('message subscription property', function() {

      it('message-subscription-property-valid');


      it('message-subscription-property-invalid');


      it('message-subscription-property-invalid-event-definition');


      it('message-subscription-property-invalid-element-type');
    });


    describe('generated value', function() {

      it('generated-value-valid');


      it('generated-value-invalid');


      it('generated-value-clash');
    });


    describe('tooltip', function() {

      it('tooltip');

      it('tooltip-invalid');

    });


    describe('zeebe:taskDefinition', function() {


      it('zeebe-task-definition');


      it('invalid-zeebe-task-definition');

    });


    describe('zeebe:calledElement', function() {

      it('called-element');

      it('called-element-applies-to-only');

      it('called-element-invalid-applies-to-no-element-type');

      it('called-element-invalid-element-type');

      it('called-element-invalid-multiple-applies-to-no-element-type');

      it('called-element-invalid-property');

      it('called-element-missing-property');
    });


    describe('zeebe:linkedResource', function() {

      it('linked-resource');

      it('linked-resource-invalid-property');

      it('linked-resource-missing-linkName');

    });


    describe('placeholder', function() {

      it('placeholder');

      it('placeholder-invalid-property');

      it('placeholder-invalid-type');
    });


    describe('engines', function() {

      it('engines');

      it('engines-no-camunda');

      it('engines-invalid');

      it('engines-invalid-version');
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
