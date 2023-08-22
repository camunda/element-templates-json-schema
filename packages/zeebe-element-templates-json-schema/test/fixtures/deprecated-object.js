export const template = {
  'name': 'AdditionalProperty',
  'id': 'com.camunda.example.deprecated.object',
  'appliesTo': [
    'bpmn:Task'
  ],
  'properties': [],
  'deprecated':  {
    'message': "Optional message, please migrate to 'FOO BAR'",
    'documentationRef': 'https://optional-link-to-migration-documentation'
  }
};

export const errors = null;