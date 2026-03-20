export const template = {
  'name': 'test',
  'id': 'test',
  'appliesTo': [
    'bpmn:ServiceTask'
  ],
  'entriesVisible': {
    'outputs': true
  },
  'properties': [
    {
      'label': 'Input',
      'type': 'String',
      'value': 'inputValue',
      'binding': {
        'type': 'zeebe:input',
        'name': 'input1'
      }
    }
  ]
};

export const errors = null;
