export const template = {
  'name': 'GitHub Connector',
  'id': 'example.com.githubConnectorNested',
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
      'name': 'Issues',
      'description': 'Manage GitHub issues',
      'steps': [
        {
          'name': 'Create issue',
          'presetId': 'createIssue'
        },
        {
          'name': 'Close issue',
          'presetId': 'closeIssue'
        }
      ]
    },
    {
      'name': 'Pull requests',
      'steps': [
        {
          'name': 'Open PR',
          'presetId': 'openPr'
        }
      ]
    }
  ],
  'presets': [
    {
      'id': 'createIssue',
      'properties': { 'operation': 'createIssue' }
    },
    {
      'id': 'closeIssue',
      'properties': { 'operation': 'closeIssue' }
    },
    {
      'id': 'openPr',
      'properties': { 'operation': 'openPr' }
    }
  ]
};

export const errors = null;
