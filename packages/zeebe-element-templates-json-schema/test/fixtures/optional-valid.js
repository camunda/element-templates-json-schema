export const template = {
  'name': 'REST Connector',
  'id': 'io.camunda.connectors.RestConnector-s1',
  'description': 'A generic REST service.',
  'appliesTo': [
    'bpmn:ServiceTask'
  ],
  'properties': [
    {
      'label': 'Request Body',
      'type': 'String',
      'optional': true,
      'binding': {
        'type': 'zeebe:input',
        'name': 'body'
      }
    },
    {
      'label': 'Result Variable',
      'type': 'String',
      'optional': true,
      'binding': {
        'type': 'zeebe:output',
        'source': '= body'
      }
    },
    {
      'label': 'Zeebe Property',
      'type': 'String',
      'optional': true,
      'binding': {
        'type': 'zeebe:property',
        'name': 'name'
      }
    },
    {
      'label': 'Task Header',
      'type': 'String',
      'optional': true,
      'binding': {
        'type': 'zeebe:taskHeader',
        'key': 'key'
      }
    }
  ]
};

export const errors = null;