# element-templates-json-schema-example

Example of how to embed the [Camunda Element Templates JSON Schema](..) into a validation library.

## Installation

Install the schema and a validation library, e.g. [@bpmn-io/json-schema-validator](https://github.com/bpmn-io/json-schema-validator).

```sh
$ npm install --save @camunda/element-templates-json-schema
$ npm install --save @bpmn-io/json-schema-validator
```

## Usage

Import the schema and the validation library into your application.

```js
import {
  Validator
} from '@bpmn-io/json-schema-validator';

import schema from '@camunda/element-templates-json-schema/resources/schema.json';
```

Wrap the schema into the validator and run the validation with an example template.

```js
const validator = new Validator({
  schema: schema
});

const {
  valid,
  object,
  errors
} = validator.validate(template);
```

[Browse the full example](./app.js) to learn how to handle the return values.


## Run the Example

```sh
$ npm install
$ npm run all
```


