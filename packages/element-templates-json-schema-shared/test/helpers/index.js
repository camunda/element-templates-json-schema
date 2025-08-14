const {
  forEach,
  set
} = require('min-dash');

const chai = require('chai');

const { default: Ajv } = require('ajv');
const AjvErrors = require('ajv-errors');

module.exports = {
  createValidator,
  withErrorMessages,
  withDeprecationWarnings
};

function createValidator(schema, errors, deprecations) {

  let deprecationWarnings = [];
  const ajv = new Ajv({
    allErrors: true,
    strict: false,
    $data: true
  });

  AjvErrors(ajv);

  ajv.addKeyword({
    keyword: 'isDeprecated',
    errors: true,
    compile(schema, parentSchema) {
      return function(data, dataCtx) {
        if (schema) {
          deprecationWarnings = [];

          // AJV doesn't support real warnings, so this adds a non-strict validation with keyword 'isDeprecated'
          const deprecationWarning = {
            keyword: 'isDeprecated',

            // TODO: schemaPath
            dataPath: dataCtx.dataPath,
            message: parentSchema.deprecatedWarning || 'This property is deprecated',
          };

          deprecationWarnings.push({
            id: dataCtx.rootData.id,
            warningDescription: deprecationWarning,
          });

          // just return true to not fail validation
          return true;
        }
        return true;
      };
    }
  });

  const validator = ajv.compile(withErrorMessages(withDeprecationWarnings(schema, deprecations), errors));


  const getDeprecationWarnings = function(data) {
    if (deprecationWarnings.length > 0 && data.id === deprecationWarnings[0].id) {
      return deprecationWarnings.map(warning => warning.warningDescription);
    }
  };

  // wrapper function checks for warnings before each validation
  const wrappedValidator = function(data, ...args) {

    // Empty deprecation before each validation
    deprecationWarnings = [];

    const result = validator.call(this, data, ...args);

    wrappedValidator.errors = validator.errors;
    wrappedValidator.warnings = getDeprecationWarnings(data);

    return result;
  };

  return wrappedValidator;
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