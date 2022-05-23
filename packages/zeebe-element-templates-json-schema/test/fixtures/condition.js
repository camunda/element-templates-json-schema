export const template = {
  'name': 'Condition',
  'id': 'example.com.condition',
  'appliesTo': [
    'bpmn:ServiceTask'
  ],
  'properties': [
    {
      'id': 'myId',
      'label': 'input 1',
      'type': 'String',
      'binding': {
        'type': 'property',
        'name': 'input1'
      }
    },
    {
      'label': 'equals (string)',
      'type': 'String',
      'condition': {
        'type': 'simple',
        property: 'myId',
        equals: 'text'
      },
      'binding': {
        'type': 'property',
        'name': 'input2'
      }
    },
    {
      'label': 'equals (number)',
      'type': 'String',
      'condition': {
        'type': 'simple',
        property: 'myId',
        equals: 11
      },
      'binding': {
        'type': 'property',
        'name': 'input3'
      }
    },
    {
      'label': 'equals (boolean)',
      'type': 'String',
      'condition': {
        'type': 'simple',
        property: 'myId',
        equals: true
      },
      'binding': {
        'type': 'property',
        'name': 'input4'
      }
    },
    {
      'label': 'one of (string)',
      'type': 'String',
      'condition': {
        'type': 'simple',
        property: 'myId',
        oneOf: [ 'text', 'another text' ]
      },
      'binding': {
        'type': 'property',
        'name': 'input4'
      }
    },
    {
      'label': 'one of (number)',
      'type': 'String',
      'condition': {
        'type': 'simple',
        property: 'myId',
        oneOf: [ 2, 5 ]
      },
      'binding': {
        'type': 'property',
        'name': 'input4'
      }
    },
    {
      'label': 'default condition type',
      'type': 'String',
      'condition': {
        property: 'myId',
        oneOf: [ 2, 5 ]
      },
      'binding': {
        'type': 'property',
        'name': 'input4'
      }
    }
  ]
};

export const errors = null;