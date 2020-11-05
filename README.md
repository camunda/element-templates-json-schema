# element-templates-json-schema

[![Build Status](https://travis-ci.com/bpmn-io/element-templates-json-schema.svg?branch=master)](https://travis-ci.com/bpmn-io/element-templates-json-schema)

JSON Schema for [(Camunda) Element Templates](https://docs.camunda.org/manual/latest/modeler/element-templates/). The schema is built on top of and validated by [`json-schema@draft-07`](https://json-schema.org/draft-07/json-schema-release-notes.html).


## Usage

There exist different ways to consume the [JSON Schema definition](./resources/schema.json). Many tools, like IDEs, support schema validation out of the box. To activate those, simply specify the `$schema` attribute to an element template.

```js
{
 "$schema": "https://unpkg.com/camunda-element-templates-json-schema0.1.0/resources/schema.json",
 "name": "Mail Task",
 "id": "com.camunda.example.MailTask",
 "appliesTo": [ "bpmn:ServiceTask" ],
 "properties": []
}
```

Additionally, it's possible to use the schema on top of existing validation libraries. Follow the [example] for further instructions.

## License

MIT

