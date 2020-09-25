import Ajv from 'ajv';
import { expect } from 'chai';

import schema from '../../resources/element-templates.json';

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

});