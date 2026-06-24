export const template = {
  'name': 'Connections',
  'id': 'example.com.connections',
  'appliesTo': [
    'bpmn:ServiceTask'
  ],
  'properties': [
    {
      'label': 'Message',
      'type': 'String',
      'binding': {
        'type': 'zeebe:input',
        'name': 'message'
      }
    }
  ],
  'connections': [
    {
      'id': 'slack-connection',
      'type': 'slack'
    },
    {
      'id': 'aws-connection',
      'type': 'aws',
      'label': 'AWS Production'
    }
  ]
};

export const errors = null;
