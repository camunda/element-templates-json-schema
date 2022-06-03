import {
  forEach,
  set
} from 'min-dash';

import Ajv from 'ajv';

export function createValidator(schema, errors) {

  const ajv = new Ajv({
    allErrors: true,
    strict: false
  });

  require('ajv-errors')(ajv);

  return ajv.compile(withErrorMessages(schema, errors));
}

export function withErrorMessages(schema, errors) {

  if (!errors || !errors.length) {
    return schema;
  }

  // clone a new copy
  let newSchema = JSON.parse(JSON.stringify(schema));

  // set <errorMessage> keyword for given path
  forEach(errors, function(error) {
    newSchema = setErrorMessage(newSchema, error);
  });

  return newSchema;
}

function setErrorMessage(schema, error) {
  const {
    path,
    errorMessage
  } = error;

  const errorMessagePath = [
    ...path,
    'errorMessage'
  ];

  return set(schema, errorMessagePath, errorMessage);
}