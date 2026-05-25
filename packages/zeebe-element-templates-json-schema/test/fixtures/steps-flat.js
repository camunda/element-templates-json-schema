export const template = {
  'name': 'GitHub Connector',
  'id': 'example.com.githubConnector',
  'appliesTo': [
    'bpmn:ServiceTask'
  ],
  'properties': [
    {
      'label': 'Operation',
      'type': 'String',
      'binding': {
        'type': 'zeebe:input',
        'name': 'operation'
      }
    }
  ],
  'steps': [
    {
      'name': 'Create issue',
      'description': 'Create a GitHub issue',
      'keywords': [ 'create', 'issue' ],
      'presetId': 'createIssue'
    },
    {
      'name': 'Close issue',
      'presetId': 'closeIssue'
    }
  ],
  'presets': [
    {
      'id': 'createIssue',
      'properties': {
        'operation': 'createIssue'
      }
    },
    {
      'id': 'closeIssue',
      'properties': {
        'operation': 'closeIssue'
      }
    }
  ]
};

export const errors = null;
