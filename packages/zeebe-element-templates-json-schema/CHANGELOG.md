# Changelog

All notable changes to [@camunda/zeebe-element-templates-json-schema](https://github.com/camunda/element-templates-json-schema/packages/zeebe-element-templates-json-schema) are documented here. We use [semantic versioning](http://semver.org/) for releases.

## Unreleased

___Note:__ Yet to be released changes appear here._

## 0.19.2

* `FIX`: allow number values for `Number` properties ([#138](https://github.com/camunda/element-templates-json-schema/issues/138))
* `FIX`: enforce string value for `feel: required` properties ([#139](https://github.com/camunda/element-templates-json-schema/pull/139))

## 0.19.1

* `FIX`: remove broken condition-on-itself subschemas for allOf and choices ([#133](https://github.com/camunda/element-templates-json-schema/issues/133))

## 0.19.0

* `FEAT`: support `Boolean` and `Number` on all bindings ([#132](https://github.com/camunda/element-templates-json-schema/pull/132))
* `FEAT`: add FEEL value `static` for `Boolean` and `Number` types ([#132](https://github.com/camunda/element-templates-json-schema/pull/132))

## 0.18.0

* `FEAT`: disallow condition depending on containing property ([#125](https://github.com/camunda/element-templates-json-schema/issues/125))

## 0.17.0

* `FEAT`: support `zeebe:calledElement` binding ([#123](https://github.com/camunda/element-templates-json-schema/pull/123))

## 0.16.1

* `FIX`: disallow `bpmn:Message#zeebe:subscription#property` binding for `bpmn:SendTask`

## 0.16.0

* `FEAT`: support `isActive` condition ([#120](https://github.com/camunda/element-templates-json-schema/pull/120))

## 0.15.0

* `FEAT`: support receive and send task templating ([#118](https://github.com/camunda/element-templates-json-schema/pull/118))

## 0.14.0

* `FEAT`: add `zeebe:taskDefinition` binding ([#117](https://github.com/camunda/element-templates-json-schema/pull/117))
* `FEAT`: mark `zeebe:taskDefinition:type` as deprecated ([#117](https://github.com/camunda/element-templates-json-schema/pull/117))
* `FEAT`: remove `zeebe:taskDefinition:retries` binding ([#117](https://github.com/camunda/element-templates-json-schema/pull/117))

### Breaking Changes

* The `zeebe:taskDefinition:retries` binding is removed. Replace the usage with `zeebe:taskDefinition` and set the `retries` property on the binding.

## 0.13.0

* `FEAT`: support `groups/openByDefault` property ([#114](https://github.com/camunda/element-templates-json-schema/pull/114))

## 0.12.0

* `FEAT`: support conditions in dropdown choices ([#107](https://github.com/camunda/element-templates-json-schema/pull/107))

## 0.11.0

* `FEAT`: add deprecation attribute ([#70](https://github.com/camunda/element-templates-json-schema/issues/70))

## 0.10.0

* `FEAT`: support tooltips in template groups and properties ([#104](https://github.com/camunda/element-templates-json-schema/pull/104))

## 0.9.0

* `FEAT`: support `generatedValue` on `String` and `Text` elements ([#97](https://github.com/camunda/element-templates-json-schema/pull/97))
* `FEAT`: support message bindings ([#96](https://github.com/camunda/element-templates-json-schema/issues/96))

## 0.8.0

* `FIX`: support `language` on `Text` elements ([#89](https://github.com/camunda/element-templates-json-schema/issues/89))
* `FEAT`: support `zeebe:taskDefinition:retries` ([#90](https://github.com/camunda/element-templates-json-schema/issues/90))
* `FEAT`: support multiple conditions for property ([#91](https://github.com/camunda/element-templates-json-schema/issues/91))

## 0.7.0

* `FEAT`: support `optional` for `zeebe:taskHeader` binding ([#87](https://github.com/camunda/element-templates-json-schema/pull/87))
* `CHORE`: drop esm ([#73](https://github.com/camunda/element-templates-json-schema/pull/73))

## 0.6.0

* `FEAT`: support `zeebe:property` binding ([#65](https://github.com/camunda/element-templates-json-schema/issues/65))
* `FIX`: correct `version` definition ([#58](https://github.com/camunda/element-templates-json-schema/issues/58))

## 0.5.0-alpha.1

* `FEAT`: separate custom error messages from schema ([#57](https://github.com/camunda/element-templates-json-schema/pull/57))

## 0.5.0-alpha.0

* `FEAT`: allow to set condition for property ([#54](https://github.com/camunda/element-templates-json-schema/issues/54))

## 0.4.1

* `FIX`: require `value` for element type property ([#53](https://github.com/camunda/element-templates-json-schema/pull/53))

## 0.4.0

* `FEAT`: add `icon` property ([#50](https://github.com/camunda/element-templates-json-schema/issues/50))
## 0.3.0

* `FEAT`: add `elementType` property ([#48](https://github.com/camunda/element-templates-json-schema/pull/48))
* `FEAT`: add `documentationRef` property ([#47](https://github.com/camunda/element-templates-json-schema/pull/47))

## 0.2.0

* `FEAT`: add `feel` property ([#46](https://github.com/camunda/element-templates-json-schema/pull/46))
* `FEAT`: provide better editor annotations ([#45](https://github.com/camunda/element-templates-json-schema/pull/45))

## 0.1.0

* `FEAT`: initial version :tada:
