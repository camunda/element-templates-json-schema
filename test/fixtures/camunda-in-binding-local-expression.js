export const template = {
  'name': 'CamundaInBinding',
  'id': 'com.camunda.example.CamundaInBinding',
  'appliesTo': [
    'bpmn:CallActivity'
  ],
  'properties': [
    {
      'label': 'foo',
      'type': 'String',
      'value': '${ var_local }',
      'binding': {
        'type': 'camunda:in',
        'target': 'var_called_source',
        'variables': 'local',
        'expression': true
      }
    }
  ]
};

export const errors = null;
