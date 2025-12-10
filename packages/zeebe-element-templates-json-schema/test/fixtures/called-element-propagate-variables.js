export const template = {
  '$schema': 'https://unpkg.com/@camunda/zeebe-element-templates-json-schema/resources/schema.json',
  'id': 'io.camunda.examples.Payment',
  'name': 'Payment',
  'description': 'Payment process call activity',
  'appliesTo': [
    'bpmn:Task',
    'bpmn:CallActivity'
  ],
  'elementType': {
    'value': 'bpmn:CallActivity'
  },
  'properties':[
    {
      'label': 'Propagate All Parent Variables',
      'type': 'Boolean',
      'binding': {
        'type': 'zeebe:calledElement',
        'property': 'propagateAllParentVariables'
      }
    },
    {
      'label': 'Propagate All Child Variables',
      'type': 'Hidden',
      'value': true,
      'binding': {
        'type': 'zeebe:calledElement',
        'property': 'propagateAllChildVariables'
      }
    },
    {
      'type': 'Hidden',
      'value': 'processId',
      'binding': {
        'type': 'zeebe:calledElement',
        'property': 'processId'
      }
    },
  ]
};

export const errors = null;
