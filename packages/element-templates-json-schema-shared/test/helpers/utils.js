const chai = require('chai');

const {
  forEach,
  set
} = require('min-dash');

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


function withDeprecationWarnings(schema, deprecations) {
  if (!deprecations || !deprecations.length) {
    return schema;
  }

  // clone a new copy
  let newSchema = JSON.parse(JSON.stringify(schema));

  // set deprecation warnings for given paths
  forEach(deprecations, function(deprecation) {
    newSchema = setDeprecationWarning(newSchema, deprecation);
  });

  return newSchema;
}

function setDeprecationWarning(schema, deprecation) {
  const {
    path,
    warningMessage
  } = deprecation;

  const deprecationPath = [
    ...path,
    'deprecatedWarning'
  ];

  return set(schema, deprecationPath, warningMessage);
}

function getDeprecationWarnings(deprecationWarnings, data) {
  if (deprecationWarnings.length > 0 && data.id === deprecationWarnings[0].id) {
    return deprecationWarnings.map(warning => warning.warningDescription);
  }
};

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

module.exports = {
  withErrorMessages,
  withDeprecationWarnings,
  getDeprecationWarnings
};

