import { expect } from 'chai';

import { map } from 'min-dash';

import {
  validateTemplate,
  validateTemplates
} from '../../lib';

const EMPTY_SCHEMA = null;

describe('validation', function() {

  describe('#validateTemplates', function() {

    it('should validate templates', function() {

      // given
      const templates = require('../fixtures/multiple-templates/samples.json');

      // when
      const {
        validTemplates,
        erroredTemplates
      } = validateTemplates(templates);

      // then
      expect(erroredTemplates).to.be.empty;
      expect(validTemplates).to.deep.equal(templates);
    });


    it('should validate templates - errors', function() {

      // given
      const templates = require('../fixtures/multiple-templates/errors.json');

      // when
      const {
        validTemplates,
        erroredTemplates
      } = validateTemplates(templates);

      // then
      expect(erroredTemplates).to.have.length(3);
      expect(validTemplates).to.have.length(7);
    });

  });


  describe('#validateTemplate', function() {

    function testTemplate(name, file, expectedErrors) {

      it('should validate templates - ' + name, function() {

        // given
        const template = require(file);

        // when
        const result = validateTemplate(template);

        // then
        expect(normalizeErrors(result.errors)).to.deep.equal(expectedErrors);
      });
    }

    testTemplate('mail-task', '../fixtures/single-template/mail-task.json');


    testTemplate('async-awesome-task', '../fixtures/single-template/async-awesome-task.json');


    testTemplate('missing-applies-to', '../fixtures/single-template/missing-applies-to.json', [
      {
        message: 'should have required property \'appliesTo\'',
        params: { missingProperty: 'appliesTo' }
      }
    ]);


    testTemplate('missing-binding', '../fixtures/single-template/missing-binding.json', [
      {
        message: 'should have required property \'binding\'',
        params: { missingProperty: 'binding' }
      }
    ]);


    testTemplate('applies-to-single', '../fixtures/single-template/applies-to-single.json', [
      {
        message: 'should be array',
        params: { type: 'array' }
      }
    ]);


    testTemplate('invalid-type', '../fixtures/single-template/invalid-type.json', [
      {
        message: 'should be equal to one of the allowed values',
        params: { allowedValues: [ 'Hidden', 'String', 'Boolean', 'Dropdown', 'Text' ] }
      }
    ]);


    testTemplate('number-value', '../fixtures/single-template/number-value.json', [
      {
        message: 'should be string,boolean',
        params: { type: 'string,boolean' }
      }
    ]);


    testTemplate('additional-property', '../fixtures/single-template/additional-property.json');


    testTemplate('invalid-binding-type', '../fixtures/single-template/invalid-binding-type.json', [
      {
        message: 'should be equal to one of the allowed values',
        params: { allowedValues: [
          'property',
          'camunda:property',
          'camunda:inputParameter',
          'camunda:outputParameter',
          'camunda:in',
          'camunda:out',
          'camunda:in:businessKey',
          'camunda:executionListener',
          'camunda:field'
        ] }
      }
    ]);


    testTemplate('choices-missing-value', '../fixtures/single-template/choices-missing-value.json', [
      {
        message: 'should have required property \'value\'',
        params: { missingProperty: 'value' }
      }
    ]);


    testTemplate('choices-missing-name', '../fixtures/single-template/choices-missing-name.json', [
      {
        message: 'should have required property \'name\'',
        params: { missingProperty: 'name' }
      }
    ]);


    testTemplate('missing-choices', '../fixtures/single-template/missing-choices.json', [
      {
        message: 'should have required property \'.choices\'',
        params: { missingProperty: '.choices' }
      }
    ]);


    testTemplate('missing-binding-name', '../fixtures/single-template/missing-binding-name.json', [
      {
        message: 'should have required property \'.name\'',
        params: { missingProperty: '.name' }
      }
    ]);


    testTemplate('missing-binding-source', '../fixtures/single-template/missing-binding-source.json', [
      {
        message: 'should have required property \'.source\'',
        params: { missingProperty: '.source' }
      }
    ]);


    testTemplate('missing-binding-source', '../fixtures/single-template/missing-binding-source.json', [
      {
        message: 'should have required property \'.source\'',
        params: { missingProperty: '.source' }
      }
    ]);


    testTemplate(
      'missing-binding-variables-target',
      '../fixtures/single-template/missing-binding-variables-target.json',
      [
        {
          message: 'should have required property \'.variables\'',
          params: { missingProperty: '.variables' }
        },
        {
          message: 'should have required property \'.target\'',
          params: { missingProperty: '.target' }
        },
        {
          message: 'should match exactly one schema in oneOf',
          params: { passingSchemas: EMPTY_SCHEMA }
        }
      ]
    );


    testTemplate('camunda-in-binding', '../fixtures/single-template/camunda-in-binding.json');


    testTemplate(
      'invalid-camunda-out',
      '../fixtures/single-template/invalid-camunda-out.json',
      [
        {
          message: 'should have required property \'.variables\'',
          params: { missingProperty: '.variables' }
        },
        {
          message: 'should have required property \'.source\'',
          params: { missingProperty: '.source' }
        },
        {
          message: 'should have required property \'.sourceExpression\'',
          params: { missingProperty: '.sourceExpression' }
        },
        {
          message: 'should match exactly one schema in oneOf',
          params: { passingSchemas: EMPTY_SCHEMA }
        }
      ]
    );


    testTemplate('camunda-out-binding', '../fixtures/single-template/camunda-out-binding.json');


    testTemplate(
      'invalid-camunda-execution-listener',
      '../fixtures/single-template/invalid-camunda-execution-listener.json',
      [
        {
          message: 'should be equal to one of the allowed values',
          params: { allowedValues: [ EMPTY_SCHEMA, 'Hidden'] }
        }
      ]
    );


    testTemplate('camunda-execution-listener', '../fixtures/single-template/camunda-execution-listener.json');


    testTemplate('with-version', '../fixtures/single-template/with-version.json');


    testTemplate('invalid-version', '../fixtures/single-template/invalid-version.json', [
      {
        message: 'should be number',
        params: { type: 'number' }
      }
    ]);


    testTemplate('multiple-errorrs', '../fixtures/single-template/multiple-errors.json', [
      {
        'message': 'invalid property type "Foo"; must be any of { Hidden, String, Boolean, Dropdown, Text }'
      },
      {
        'message': 'must provide choices=[] with "Dropdown" type'
      },
      {
        'message': 'property.binding "property" requires source'
      },
      {
        'message': 'property.binding "property" requires name'
      }
    ]);

  });

});


// helper //////////////

function normalizeErrors(errors) {
  if (!errors) {
    return;
  }

  return map(errors, function(error) {
    return {
      message: error.message,
      params: error.params
    };
  });
}