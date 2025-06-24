export const template = {
  '$schema': 'https://unpkg.com/@camunda/zeebe-element-templates-json-schema/resources/schema.json',
  'id': 'io.camunda.examples.Payment',
  'name': 'Payment',
  'description': 'Payment process call activity',
  'appliesTo': [
    'bpmn:Task'
  ],
  'elementType': {
    'value': 'bpmn:CallActivity'
  },
  'properties':[
    {
      'type': 'Hidden',
      'value': 'deployment',
      'binding': {
        'type': 'zeebe:calledElement',
        'property': 'bindingType'
      }
    }
  ]
};

export const errors = [ {} ];
