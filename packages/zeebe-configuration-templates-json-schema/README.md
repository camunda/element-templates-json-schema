# @camunda/zeebe-configuration-templates-json-schema

[![Build Status](https://img.shields.io/github/actions/workflow/status/camunda/element-templates-json-schema/CI.yml?branch=master)](https://github.com/camunda/element-templates-json-schema/actions?query=workflow%3ACI)

JSON Schema for (Zeebe) Configuration Templates. A configuration template is a declarative JSON document that defines the structure and UI rendering of a configuration (e.g. a credential) — what fields it contains and how they appear in the configuration editor. The schema is built on top of and validated by [`json-schema@draft-07`](https://json-schema.org/draft-07/json-schema-release-notes.html).

A configuration template mirrors the [element template](../zeebe-element-templates-json-schema) top-level structure, restricted to what a configuration needs: every property uses the `property` binding, the `Configuration` property type and `feel` are not supported, and a `kind` discriminates the class of configuration produced.

## Usage

Set the `$schema` attribute to reference the [JSON Schema definition](./resources/schema.json).

```js
{
  "$schema": "https://unpkg.com/@camunda/zeebe-configuration-templates-json-schema/resources/schema.json",
  "name": "AWS Credential",
  "id": "io.camunda:aws-credential:1",
  "kind": "CREDENTIAL",
  "version": 1,
  "properties": [
    {
      "label": "Access key",
      "type": "String",
      "secret": true,
      "binding": { "type": "property", "name": "accessKey" }
    }
  ]
}
```

You can also use a specific version.

```js
"$schema": "https://unpkg.com/@camunda/zeebe-configuration-templates-json-schema@0.1.0/resources/schema.json"
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
