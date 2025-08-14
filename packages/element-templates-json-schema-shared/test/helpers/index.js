const { default: Ajv } = require('ajv');
const AjvErrors = require('ajv-errors');

const { withErrorMessages, withDeprecationWarnings } = require('./utils');

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
          // AJV will not throw an error, but will add the deprecation warning to the
          // validator.errors array
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

    const result = validator.call(this, data, ...args);

    wrappedValidator.errors = validator.errors;
    wrappedValidator.warnings = getDeprecationWarnings(data);

    return result;
  };

  return wrappedValidator;
}