const { default: Ajv } = require('ajv');
const AjvErrors = require('ajv-errors');

const { withErrorMessages, withDeprecationWarnings, getDeprecationWarnings } = require('./utils');

module.exports = {
  createValidator
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

  // wrapper function checks for warnings before each validation
  const wrappedValidator = function(data, ...args) {

    // Empty deprecation before each validation
    deprecationWarnings = [];

    const result = validator.call(this, data, ...args);

    wrappedValidator.errors = validator.errors;
    wrappedValidator.warnings = getDeprecationWarnings(deprecationWarnings, data);

    return result;
  };

  return wrappedValidator;
}