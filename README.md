# element-templates-json-schema

[![Build Status](https://img.shields.io/github/workflow/status/camunda/element-templates-json-schema/CI)](https://github.com/camunda/element-templates-json-schema/actions?query=workflow%3ACI)


JSON Schema for [(Camunda) Element Templates](https://docs.camunda.io/docs/components/modeler/desktop-modeler/element-templates/about-templates/). The schema is built on top of and validated by [`json-schema@draft-07`](https://json-schema.org/draft-07/json-schema-release-notes.html).


## Usage

This library exports [several Element Templates JSON Schema definitions](./packages).

There exist different ways to consume the definition. Many tools, like IDEs, support schema validation out of the box. To activate those, simply specify the `$schema` attribute to an element template.

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


## Build and Run

Prepare the project by installing all dependencies:

```sh
npm install
```

Then, depending on your use case, bundle [the source schema files](./packages) together

```sh
# bundle all schema files
npm run build

# bundle C7 schema
npm run build:camunda

# bundle C8 schema
npm run build:zeebe
```

Furthermore, execute the following command to run the generated schema against our tests

```sh
npm run test
```

Run tests in individual [packages](./packages):

```
npm run dev -- @camunda/zeebe-element-templates-json-schema
```

## Release

We use [`lerna`](https://github.com/lerna/lerna) to publish releases. All [packages](./packages/) can be released independently (lerna will take care of this).

```sh
# release stable version
npm run release

# release alpha version
npm run release:alpha

# execute dry run
npm run release:dry
```

## License

MIT

