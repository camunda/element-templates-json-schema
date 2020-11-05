import {
  Validator
} from '@bpmn-io/json-schema-validator';

import schema from '../resources/schema.json';

import template from './example.json';

const validator = new Validator({ schema });

const {
  errors
} = validator.validate(template);

if (errors.length) {
  console.log('Element Template is invalid!\n');
  errors.forEach(e => console.log(' *', e.message));
} else {
  console.log('Element Template is valid!');
}