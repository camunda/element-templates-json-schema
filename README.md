# element-templates-json-schema

[![Build Status](https://img.shields.io/github/workflow/status/camunda/element-templates-json-schema/CI)](https://github.com/camunda/element-templates-json-schema/actions?query=workflow%3ACI)


JSON Schema for [(Camunda) Element Templates](https://docs.camunda.org/manual/latest/modeler/element-templates/). The schema is built on top of and validated by [`json-schema@draft-07`](https://json-schema.org/draft-07/json-schema-release-notes.html).


## Usage

There exist different ways to consume the [JSON Schema definition](./resources/schema.json). Many tools, like IDEs, support schema validation out of the box. To activate those, simply specify the `$schema` attribute to an element template.

```js
{
  "$schema": "https://unpkg.com/@camunda/element-templates-json-schema/resources/schema.json",
  "name": "Mail Task",
  "id": "com.camunda.example.MailTask",
  "appliesTo": [ "bpmn:ServiceTask" ],
  "properties": []
}
```

You can also use a specific version.

```js
"$schema": "https://unpkg.com/@camunda/element-templates-json-schema@0.1.0/resources/schema.json"
```

Additionally, it's possible to use the schema on top of existing validation libraries and tools. Follow the [example](./example) for further instructions.

## License

MIT

