export const template = {
  'name': 'REST',
  'id': 'example.rest.v2',
  'version': 3,
  'appliesTo': [
    'bpmn:ServiceTask'
  ],
  'properties': [
    {
      'label': 'Endpoint',
      'type': 'String',
      'binding': {
        'type': 'zeebe:input',
        'name': 'endpoint'
      }
    }
  ],
  'updatePaths': [
    {
      'templateId': 'example.rest'
    },
    {
      'beforeVersion': 2,
      'changes': '- Requests now time out after 30 seconds.'
    }
  ]
};

export const errors = null;
