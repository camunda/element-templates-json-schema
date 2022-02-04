import Ajv from 'ajv';
import { expect } from 'chai';

import platformSchema from '../../resources/schema.json';


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

});