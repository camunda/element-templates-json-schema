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