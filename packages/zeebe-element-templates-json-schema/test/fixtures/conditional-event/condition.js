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
    }
  ]
};

export const errors = null;
