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
      'templateId': 'example.rest',
      'message': 'Migration to REST connector is available.',
      'changes': '- URL is now called endpoint.',
      'hints': [
        {
          'from': { 'type': 'zeebe:input', 'name': 'url' },
          'to': { 'type': 'zeebe:input', 'name': 'endpoint' }
        },
        {
          'from': { 'type': 'zeebe:taskHeader', 'key': 'method' },
          'to': { 'type': 'zeebe:taskHeader', 'key': 'method' },
          'values': { 'GET': 'get', '*': 'post' }
        }
      ]
    },
    {
      'beforeVersion': 2,
      'changes': '- Timeout is now called request timeout.',
      'hints': [
        {
          'from': { 'type': 'zeebe:input', 'name': 'timeout' },
          'to': { 'type': 'zeebe:input', 'name': 'requestTimeout' }
        }
      ]
    }
  ]
};

export const errors = null;
