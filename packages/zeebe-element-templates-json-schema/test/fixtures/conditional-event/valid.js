export const template = {
  '$schema': 'https://unpkg.com/@camunda/zeebe-element-templates-json-schema/resources/schema.json',
  'id': 'io.camunda.examples.conditional',
  'name': 'Conditional Event',
  'appliesTo': [
    'bpmn:Event'
  ],
  'elementType': {
    'value': 'bpmn:IntermediateCatchEvent',
    'eventDefinition': 'bpmn:ConditionalEventDefinition'
  },
  'properties': [
    {
      'label': 'Condition',
      'type': 'String',
      'feel': 'required',
      'binding': {
        'type': 'bpmn:ConditionalEventDefinition#property',
        'name': 'condition'
      }
    },
    {
      'label': 'Variable Names',
      'type': 'Hidden',
      'value': 'foo,bar',
      'binding': {
        'type': 'bpmn:ConditionalEventDefinition#zeebe:conditionalFilter#property',
        'name': 'variableNames'
      }
    },
    {
      'label': 'Variable Events',
      'type': 'Hidden',
      'value': 'create,update',
      'binding': {
        'type': 'bpmn:ConditionalEventDefinition#zeebe:conditionalFilter#property',
        'name': 'variableEvents'
      }
    }
  ]
};

export const errors = null;