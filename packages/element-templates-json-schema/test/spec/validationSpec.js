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


  describe('single template', function() {

    it('mail-task');


    it('async-awesome-task');


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


    it('missing-binding-name');


    it('missing-binding-source');


    it('missing-binding-variables-target');


    it('camunda-in-binding');


    it('camunda-in-binding-local');


    it('camunda-in-binding-local-expression');


    it('invalid-camunda-out');


    it('invalid-camunda-out-overloaded');


    it('camunda-out-binding');


    it('camunda-out-binding-local');


    it('camunda-out-binding-local-expression');


    it('with-version');


    it('invalid-version');


    it('multiple-errors');


    it('error-task');


    it('error-task-multiple');


    it('missing-binding-errorRef');


    it('constraints');


    it('deprecated-bool');


    it('deprecated-invalid');


    it('deprecated-object');


    it('invalid-constraints');


    it('invalid-applies-to');


    it('entries-visible-boolean');


    it('entries-visible-deprecated');


    it('pattern-string');


    it('documentation-ref');


    it('invalid-documentation-ref');


    it('element-type');


    it('element-type-no-value');


    it('element-type-invalid');


    describe('property type - binding type', function() {

      it('invalid-property-type');


      it('invalid-camunda-property-type');


      it('invalid-input-parameter-type');


      it('invalid-output-parameter-type');


      it('invalid-camunda-in-type');


      it('invalid-camunda-in-business-key-type');


      it('invalid-camunda-out-type');


      it('invalid-field-type');


      it('invalid-camunda-error-event-definition-type');

    });


    describe('scoped binding', function() {

      it('scope-connector-legacy');


      it('scope-invalid-legacy');


      it('scope-connector-missing-binding-legacy');


      it('scope-connector');


      it('scope-missing-binding');


      it('scopes-multiple');


      it('scope-missing-type');


      it('scope-invalid-type');


      it('scope-missing-properties');


      it('scope-missing-error-id');

    });

    describe('execution listeners', function() {
      it('camunda-execution-listener');


      it('invalid-execution-listener-type');


      it('invalid-execution-listener-implementation-type');
    });


    describe('grouping', function() {

      it('groups');


      it('groups-missing-id');


      it('groups-missing-label');

    });


    describe('condition', function() {

      it('condition');


      it('condition-missing-property');


      it('condition-missing-condition-keyword');


      it('condition-wrong-types');


      it('condition-default-type');


      it('condition-wrong-type');
    });

  });


  describe('multiple templates', function() {

    it('multiple-mail-tasks');


    it('single-template-in-array');


    it('invalid-multiple-mail-tasks');


    it('complex');


    it('rpa-templates');

  });


  describe('placeholder', function() {

    it('placeholder');

    it('placeholder-invalid-property');

    it('placeholder-invalid-type');
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
