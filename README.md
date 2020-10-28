# element-templates-json-schema

[![Build Status](https://travis-ci.com/bpmn-io/element-templates-json-schema.svg?branch=master)](https://travis-ci.com/bpmn-io/element-templates-json-schema)

JSON Schema for [(Camunda) Element Templates](https://docs.camunda.org/manual/latest/modeler/element-templates/). The schema is built on top of and validated by [`json-schema@draft-07`](https://json-schema.org/draft-07/json-schema-release-notes.html).

## Installation 

```sh
$ npm i --save @bpmn-io/element-templates-json-schema
```

## Usage

Given [this example template](./test/fixtures/single-template/mail-task.json)

```js

import {
  validateTemplate
} from '@bpmn-io/element-templates-json-schema';

import template from './test/fixtures/single-template/mail-task.json';

const {
  valid,
  errors
} = validateTemplate(template);

if (!valid) {
  console.error('Invalid element template detected:', errors);
}

```


It's also possible to multiple templates at once.

```js

import {
  validateTemplates
} from '@bpmn-io/element-templates-json-schema';

import templates from './test/fixtures/multiple-templates/samples.json';

const {
  validTemplates,
  erroredTemplates
} = validateTemplates(templates);

if (erroredTemplates.length) {
  console.error('Invalid element templates detected:', erroredTemplates);
}

```

## License

MIT

