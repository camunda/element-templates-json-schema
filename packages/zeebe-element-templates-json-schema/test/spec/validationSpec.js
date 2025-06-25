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
    expect(errors).to.eqlErrors(expectedErrors);
  });
}

/**
 * Run a test by merging a base template with properties from another file.
 * @param {string} name - name of the base template
 * @param {string} additionalPropertiesName - Name of the file containing additional properties
 * @param {Mocha.TestFunction} it - Mocha's `it` function to run the test
 */
function createTestWithProperties(name, additionalPropertiesName, bindingType, it) {
  it(`${name} with ${additionalPropertiesName}`, async function() {

    // given
    const base = await import(`../fixtures/${name}.js`);
    const props = await import(`../fixtures/properties/${additionalPropertiesName}.js`);

    // Fail if base file has errors
    if (base.errors !== null) {
      throw new Error(`Base file '${name}'.js must have errors === null, got: ${JSON.stringify(base.errors)}`);
    }

    // Merge: use base template, but replace properties with those from properties file and update type
    const template = {
      ...base.template,
      properties: [ ...base.template.properties, ...props.properties.map((elementProperty) => {
        elementProperty.binding = {
          ...elementProperty.binding,
          type: bindingType || elementProperty.binding.type
        };
        return elementProperty;
      })
      ]
    };

    // Use only errors from properties file.
    // Some files lead to slightly different errors, due to ordering and the errors being aggressively set on the first element in the properties array.
    const expectedErrors = props.errors instanceof Array || props.errors === null ? props.errors : props.errors[name];

    if (expectedErrors === undefined) {
      throw new Error(`Expected errors for '${name}' but errors was undefined`);
    }

    // when
    const { errors } = validateTemplate(template);

    // then
    expect(errors).to.eqlErrors(expectedErrors);
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

  it.withProperties = function withProperties(name, additionalPropertiesName, bindingType) {
    return createTestWithProperties(name, additionalPropertiesName, bindingType, iit);
  };

  describe('should support property `bindingTypes`: `versionTag`, `deployment`, and `latest`', function() {
    [ { name: 'called-decision', bindingType: 'zeebe:calledDecision' },
      { name: 'form-definition-with-formId', bindingType: 'zeebe:formDefinition' },
      { name: 'called-element', bindingType: 'zeebe:calledElement' }
    ].forEach(({ name, bindingType }) => {
      it.withProperties(name, 'binding-type-deployment', bindingType);
      it.withProperties(name, 'binding-type-invalid-value', bindingType);
      it.withProperties(name, 'binding-type-invalid-input-type', bindingType);
      it.withProperties(name, 'binding-type-latest', bindingType);
      it.withProperties(name, 'binding-type-missing-property-binding-type', bindingType);
      it.withProperties(name, 'binding-type-missing-property-versionTag', bindingType);
      it.withProperties(name, 'binding-type-versionTag', bindingType);
      it.withProperties(name, 'binding-type-versionTag-invalid-feel', bindingType);
      it.withProperties(name, 'binding-type-versionTag-invalid-input-type', bindingType);
    });


  });


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


    it('valid-zeebe-input-feel');


    it('valid-zeebe-output-feel');


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


    describe('categories', function() {

      it('category');

      it('category-only-id');

      it('category-only-name');
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

      it('called-element-missing-processId');

      it('called-element-missing-property');

      it('called-element-with-io-mapping');
    });


    describe('zeebe:linkedResource', function() {

      it('linked-resource');

      it('linked-resource-invalid-property');

      it('linked-resource-missing-linkName');

      it.skip('linked-resource-missing-versionTag');

      it.skip('linked-resource-invalid-bindingType');

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


    describe('keywords', function() {

      it('keywords');

      it('invalid-keywords');

      it('invalid-keywords-array');

    });


    describe('zeebe:userTask', function() {

      it('zeebe-user-task');

      it('zeebe-user-task-invalid');

    });

    describe('zeebe:formDefinition', function() {

      it('form-definition-invalid-element-type');

      it('form-definition-invalid-formId-feel');

      it('form-definition-missing-zeebe-user-task');

      it('form-definition-with-external-reference');

      it('form-definition-with-external-reference-feel');

      it('form-definition-with-external-reference-invalid-property-bindingType');

      it('form-definition-with-formId');

      it('form-definition-invalid-type-number');

      it('form-definition-invalid-type-boolean');

    });

    describe('zeebe:calledDecision', function() {

      it('called-decision');

      it('called-decision-missing-decisionId');

      it('called-decision-missing-resultVariable');

      it('called-decision-missing-element-type');

      it('called-decision-invalid-property');

      it('called-decision-invalid-element-type');

      it('called-decision-invalid-feel-resultVariable');
    });

    describe('bpmn:businessRuleTask', function() {
      it('business-rule-task-task-definition');

      it('business-rule-task-conflicting-bindings');

      it('business-rule-task-conflicting-deprecated-bindings');
    });

    describe('bindingType property', function() {


      it('binding-type-missing-property-binding-type');

      it('binding-type-missing-property-versionTag');

      it('binding-type-invalid-value');

      it('binding-type-deployment');

      it('binding-type-versionTag');

      it('binding-type-latest');

      it('binding-type-versionTag-invalid-mixed-type');

      it('binding-type-invalid-element-type');

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

