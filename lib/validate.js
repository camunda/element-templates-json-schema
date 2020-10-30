import Ajv from 'ajv';

import {
  filter,
  forEach
} from 'min-dash';

import schema from '../resources/element-templates.schema.json';

export function validateTemplate(template) {
  const validate = createValidator();

  const valid = validate(template, schema);

  let errors = validate.errors;

  if (errors && errors.length) {

    // @pinussilvestrus: the <ajv-errors> extensions produces a couple of.
    // unnecessary errors when using an <errorMessage> attribute.
    // Therefore, we should flatten the produced errors a bit to not
    // confuse the consumer of this library.

    // (1) wrap raw errors in case of custom errorMessage attribute
    forEach(errors, wrapRawErrors);

    // (2) ignore supportive error messages (e.g. "if-then-rules")
    errors = ignoreSupportiveErrors(errors);
  }

  return {
    valid: valid,
    errors: errors
  };
}

export function validateTemplates(templates) {
  let validTemplates = [],
      erroredTemplates = [];

  forEach(templates, function(template) {
    const {
      valid,
      errors
    } = validateTemplate(template);

    if (valid) {
      validTemplates.push(template);
    } else {
      erroredTemplates.push({
        errors: errors,
        template: template
      });
    }

  });

  return {
    validTemplates: validTemplates,
    erroredTemplates: erroredTemplates
  };
}


// helper //////////////

function createValidator() {
  const ajv = new Ajv({
    allErrors: true,
    jsonPointers: true
  });

  require('ajv-errors')(ajv);

  return ajv.compile(schema);
}

function wrapRawErrors(error) {
  const params = error.params;

  if (params && params.errors) {
    params.rawErrors = params.errors;
    delete params.errors;
  }
}

function ignoreSupportiveErrors(errors) {
  return filter(errors, function(error) {
    return error.keyword !== 'if';
  });
}