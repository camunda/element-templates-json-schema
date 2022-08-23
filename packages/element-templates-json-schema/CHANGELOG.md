# Changelog

All notable changes to [@camunda/element-templates-json-schema](https://github.com/camunda/element-templates-json-schema/packages/element-templates-json-schema) are documented here. We use [semantic versioning](http://semver.org/) for releases.

## Unreleased

___Note:__ Yet to be released changes appear here._

## 0.10.1

* `FIX`: correct `version` definition ([#58](https://github.com/camunda/element-templates-json-schema/issues/58))

## 0.10.0-alpha.1

* `FEAT`: separate custom error messages from schema ([#57](https://github.com/camunda/element-templates-json-schema/pull/57))

## 0.10.0-alpha.0

* `FEAT`: allow to set condition for property ([#54](https://github.com/camunda/element-templates-json-schema/issues/54))

## 0.9.1

* `FIX`: require `value` for element type property ([#53](https://github.com/camunda/element-templates-json-schema/pull/53))

## 0.9.0

* `FEAT`: add `elementType` property ([#48](https://github.com/camunda/element-templates-json-schema/pull/48))
* `FEAT`: add `documentationRef` property ([#47](https://github.com/camunda/element-templates-json-schema/pull/47))

## 0.8.0

* `FEAT`: provide better editor annotations ([#45](https://github.com/camunda/element-templates-json-schema/pull/45))

## 0.7.0

* `FEAT`: re-structure schema ([#42](https://github.com/camunda/element-templates-json-schema/pull/41))

## 0.6.0

* `FEAT`: add `groups` schema ([#39](https://github.com/camunda/element-templates-json-schema/pull/39))

## 0.5.0

* `FEAT`: remove deprecated `scopes_old`
* `FEAT`: remove type `Object` from `template#entriesVisible`

### BREAKING CHANGES

* `template#scopes` takes an Array as the only valid type. Wrap your `scopes` object in an Array and add `type` to migrate.
* `template#entriesVisible` can now be only of type `Boolean`. Make sure to adjust your templates.

## 0.4.0

* `FEAT`: support `camunda:in` and `camunda:out` bindings for specific `target`, `source` or `sourceExpression` given `local` scope ([d0e9d2b](https://github.com/camunda/element-templates-json-schema/commit/d0e9d2b5d75a9f36366125b08065db26ec409fa9))

## 0.3.1

* `FIX`: set `minLength` and `maxLength` properties as numbers ([#24](https://github.com/camunda/element-templates-json-schema/issues/24))
* `FIX`: adjust various error messages to be more explicit ([#27](https://github.com/camunda/element-templates-json-schema/pull/27))
* `FIX`: allow `entriesVisible` property to be boolean ([`81043941`](https://github.com/camunda/element-templates-json-schema/commit/81043941441b7e682b09ca99aabedadfba8f622f))
* `FIX`: allow `pattern` property to be string ([`65370578`](https://github.com/camunda/element-templates-json-schema/commit/653705786c4b7499a1aa15c3e6463815f8744fa2))
* `CHORE`: make schema compatible with `ajv@7` ([`5630ef53`](https://github.com/camunda/element-templates-json-schema/commit/5630ef5362857667adbdd43ab3fa15cd5d648406))

## 0.3.0

* `FEAT`: support multiple templates as a single entity ([#15](https://github.com/camunda/element-templates-json-schema/issues/15))
* `FEAT`: add new scopes schema to handle as arrays ([`fb32aca9`](https://github.com/camunda/element-templates-json-schema/commit/fb32aca9c43e901ffdc67a2cfecc37afaad685fe))
* `FEAT`: support `camunda:errorEventDefinition` property bindings ([`91eb144b`](https://github.com/camunda/element-templates-json-schema/commit/91eb144b832de5ba8b6de276e0214ec518d32196))
* `FEAT`: support scoped `bpmn:Error` bindings ([`75e0c24f`](https://github.com/camunda/element-templates-json-schema/commit/75e0c24f3712376bda51cd73b749341ca9629b56))
* `FEAT`: restrict allowed scope types ([`7fce5a14`](https://github.com/camunda/element-templates-json-schema/commit/7fce5a143a442f2ef9c116e2500e39717781a217))

## 0.2.0

* `FEAT`: add schema for scopes ([#14](https://github.com/camunda/element-templates-json-schema/issues/14))
* `FIX`: prevent example from crashing for valid templates ([#16](https://github.com/camunda/element-templates-json-schema/issues/16))
* `CHORE`: migrate CI to GitHub actions ([`cceab6c5`](https://github.com/camunda/element-templates-json-schema/commit/cceab6c5f7316f3749e6c0d40e52805420668b93))

## 0.1.0

* `FEAT`: initial version :tada:
