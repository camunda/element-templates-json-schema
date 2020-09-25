import Ajv from 'ajv';

import { forEach } from 'min-dash';

import schema from '../resources/element-templates.json';

export function validateTemplate(template) {
  const validate = createValidator();

  const valid = validate(template, schema);

  return {
    valid: valid,
    errors: validate.errors
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
  const ajv = new Ajv();
  return ajv.compile(schema);
}