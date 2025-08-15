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


    it('feel-missing-type');


    it('feel-missing-type-multiple-templates');


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

      it('script-task-job-worker');
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

    describe('zeebe:script', function() {

      it('script-task');

      it('script-task-applies-to-only');

      it('script-task-invalid-applies-to-no-element-type');

      it('script-task-invalid-element-type');

      it('script-task-invalid-multiple-applies-to-no-element-type');

      it('script-task-invalid-property');

      it('script-task-missing-property');

      it('script-task-invalid-feel-resultVariable');

      it('script-task-invalid-expression-feel-optional');

      it('script-task-expression-feel-required');

      it('script-task-invalid-type');

      it('script-task-conflicting-bindings');

      it('script-task-conflicting-deprecated-bindings');
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

      it('form-definition-invalid-external-reference-and-formId');

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


    describe('property', function() {

      it('property/valid-feel-required');


      it('property/invalid-missing-feel-completion-condition');


      it('property/invalid-missing-feel-activation-condition');


      it('property/invalid-missing-feel-condition-expression');
    });


    describe('property bindingType', function() {

      const testCases = [
        'deployment',
        'dropdown',
        'dropdown-invalid-choices',
        'invalid-feel',
        'invalid-input-type',
        'invalid-value',
        'latest',
        'missing-property-binding-type',
        'missing-property-versionTag',
        'versionTag',
        'versionTag-invalid-feel',
        'versionTag-invalid-unconditional',
        'versionTag-invalid-input-type'
      ];

      describe('additional property', function() {

        it('binding-type/additional-property');
      });

      describe('called decision', function() {

        for (const testCase of testCases) {
          it(`binding-type/called-decision/${testCase}`);
        }
      });


      describe('form definition', function() {
        for (const testCase of testCases) {
          it(`binding-type/form-definition/${testCase}`);
        }
      });


      describe('called element', function() {
        for (const testCase of testCases) {
          it(`binding-type/called-element/${testCase}`);
        }
      });


      describe('linked resource', function() {
        for (const testCase of testCases) {
          it(`binding-type/linked-resource/${testCase}`);
        }
      });

    });

    describe('zeebe:assignmentDefinition', function() {


      it('assignment-definition/invalid-element-type');

      it('assignment-definition/invalid-input-type');

      it('assignment-definition/invalid-property');

      it('assignment-definition/missing-property');

      it('assignment-definition/missing-zeebe-user-task');

      it('assignment-definition/valid-all-properties');

      it('assignment-definition/valid-assignee');

      it('assignment-definition/valid-candidateGroups');

      it('assignment-definition/valid-candidateUsers');

      it('assignment-definition/valid-with-feel');

    });

    describe('zeebe:adHoc', function() {

      it('ad-hoc/invalid-element-type');

      it('ad-hoc/invalid-feel-output-collection');

      it('ad-hoc/invalid-input-type');

      it('ad-hoc/invalid-missing-feel-output-element');

      it('ad-hoc/invalid-property');

      it('ad-hoc/missing-output-collection');

      it('ad-hoc/missing-output-element');

      it('ad-hoc/missing-output-element-feel');

      it('ad-hoc/missing-task-definition');

      it('ad-hoc/missing-task-definition-type-property');

      it('ad-hoc/valid');

    });

  });


  describe('zeebe:priorityDefinition', function() {

    it('priority-definition/invalid-element-type');

    it('priority-definition/invalid-input-types');

    it('priority-definition/invalid-property');

    it('priority-definition/invalid-values');

    it('priority-definition/missing-zeebe-user-task');

    it('priority-definition/valid');

    it('priority-definition/valid-with-feel');

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
