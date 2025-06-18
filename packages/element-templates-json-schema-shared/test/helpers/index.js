const {
  forEach,
  set
} = require('min-dash');

const chai = require('chai');

const { default: Ajv } = require('ajv');
const AjvErrors = require('ajv-errors');

module.exports = {
  createValidator,
  withErrorMessages
};

function createValidator(schema, errors) {

  const ajv = new Ajv({
    allErrors: true,
    strict: false,
    $data: true
  });

  AjvErrors(ajv);

  return ajv.compile(withErrorMessages(schema, errors));
}

function withErrorMessages(schema, errors) {

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

function eqlErrors(chai, utils) {

  const Assertion = chai.Assertion;

  Assertion.addMethod('eqlErrors', function(expectedErrors, filter) {

    const actualErrors = this._obj;

    // formats the validation errors, so that they can be used directly in the fixture files.
    this.eql(expectedErrors,
      `Errors from validation do not match expected.\n\tValidation returned this error (you can use it in the fixture):\n\t${JSON.stringify(actualErrors, null, 2).replace(/"([^"]+)":/g, '$1:')}\n`);
  });
}

chai.use(eqlErrors);