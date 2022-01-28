export const template = {
  'name': 'Grouping',
  'id': 'example.com.missingGroupId',
  'appliesTo': [
    'bpmn:ServiceTask'
  ],
  'properties': [
    {
      'label': 'input 1',
      'type': 'String',
      'group': 'two',
      'binding': {
        'type': 'camunda:inputParameter',
        'name': 'input1'
      }
    }
  ],
  'groups': [
    {
      'id': 'one',
      'label': 'Group one'
    }
  ]
};

export const errors = null;