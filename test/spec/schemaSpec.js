import Ajv from 'ajv';
import { expect } from 'chai';

import platformSchema from '../../resources/schema.json';
import cloudSchema from '../../resources/cloud.json';


describe('schema validation', function() {

  it('should be valid (platform)', function() {

    // given
    const ajv = new Ajv();

    // when
    const valid = ajv.validateSchema(platformSchema);

    // then
    expect(valid).to.be.true;
    expect(valid.errors).to.not.exist;
  });


  it('should be valid (cloud)', function() {

    // given
    const ajv = new Ajv();

    // when
    const valid = ajv.validateSchema(cloudSchema);

    // then
    expect(valid).to.be.true;
    expect(valid.errors).to.not.exist;
  });

});