export const template = {
  'name': 'Inbound connector with credential',
  'id': 'io.camunda.example.InboundWithCredential',
  'appliesTo': [
    'bpmn:StartEvent'
  ],
  'properties': [
    {
      'type': 'Configuration',
      'configurationTemplate': 'io.camunda:auth-config:1',
      'binding': {
        'type': 'zeebe:property',
        'name': 'auth'
      }
    }
  ]
};

export const errors = null;
