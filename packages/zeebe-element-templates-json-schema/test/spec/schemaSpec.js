import Ajv from 'ajv';
import { expect } from 'chai';

import schema from '../../resources/schema.json';

const ERROR_MESSAGE_KEYWORD = '"errorMessage":';


describe('schema validation', function() {

  it('should be valid', function() {

    // given
    const ajv = new Ajv();

    // when
    const valid = ajv.validateSchema(schema);

    // then
    expect(valid).to.be.true;
    expect(valid.errors).to.not.exist;
  });


  it('should NOT contain <errorMessage> keyword', function() {

    // when
    const schemaStr = JSON.stringify(schema);

    // then
    expect(schemaStr.includes(ERROR_MESSAGE_KEYWORD)).to.be.false;
  });

});