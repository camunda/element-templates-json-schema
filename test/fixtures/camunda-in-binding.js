export const template = {
  'name': 'CamundaInBinding',
  'id': 'com.camunda.example.CamundaInBinding',
  'appliesTo': [
    'bpmn:Task'
  ],
  'properties': [
    {
      'label': 'foo',
      'type': 'String',
      'binding': {
        'type': 'camunda:in',
        'variables': 'all'
      }
    }
  ]
};

export const errors = null;