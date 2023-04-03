# @camunda/zeebe-element-templates-json-schema

[![Build Status](https://img.shields.io/github/actions/workflow/status/camunda/element-templates-json-schema/CI.yml?branch=master)](https://github.com/camunda/element-templates-json-schema/actions?query=workflow%3ACI)



JSON Schema for (Zeebe) Element Templates. The schema is built on top of and validated by [`json-schema@draft-07`](https://json-schema.org/draft-07/json-schema-release-notes.html).


## Usage

Set the `$schema` attribute to reference the [JSON Schema definition](./resources/schema.json).

```js
{
  "$schema": "https://unpkg.com/@camunda/zeebe-element-templates-json-schema/resources/schema.json",
  "name": "My Service Worker",
  "id": "com.example.ServiceWorker",
  "appliesTo": [ "bpmn:ServiceTask" ],
  "properties": []
}
```

You can also use a specific version.

```js
"$schema": "https://unpkg.com/@camunda/zeebe-element-templates-json-schema@0.1.0/resources/schema.json"
```

## Build and Run

Prepare the project by installing all dependencies:

```sh
npm install
```

Bundle [the source schema files](./src) together

```sh
npm run build
```

Execute the following command to run the generated schema against the tests

```sh
npm run test
```

## License

MIT

