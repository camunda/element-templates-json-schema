import Ajv from 'ajv';

export function createValidator(schema) {

  const ajv = new Ajv({
    allErrors: true,
    strict: false
  });

  require('ajv-errors')(ajv);

  return ajv.compile(schema);
}