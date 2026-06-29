import {
  Validator
} from '@bpmn-io/json-schema-validator';

import elementTemplateSchema from '../packages/element-templates-json-schema/resources/schema.json';
import zeebeElementTemplateSchema from '../packages/zeebe-element-templates-json-schema/resources/schema.json';
import configurationTemplateSchema from '../packages/zeebe-configuration-templates-json-schema/resources/schema.json';

import elementTemplate from './example.json';
import configurationTemplate from './example-configuration.json';
import elementTemplateWithConfiguration from './example-element-configuration.json';

validate('Element Template', elementTemplateSchema, elementTemplate);
validate('Configuration Template', configurationTemplateSchema, configurationTemplate);
validate('Element Template with Configuration', zeebeElementTemplateSchema, elementTemplateWithConfiguration);


function validate(label, schema, template) {
  const validator = new Validator({ schema });

  const {
    errors
  } = validator.validate(template);

  if (errors && errors.length) {
    console.log(`${label} is invalid!\n`);
    errors.forEach(e => console.log(' *', e.message));
  } else {
    console.log(`${label} is valid!`);
  }
}
