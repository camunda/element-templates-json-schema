import { expect } from 'chai';

import { map } from 'min-dash';

import {
  validateTemplate,
  validateTemplates
} from '../../lib';

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