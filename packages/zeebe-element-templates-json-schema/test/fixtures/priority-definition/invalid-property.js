export const template = {
  'name': 'Priority Definition',
  'id': 'priority-definition',
  'description': 'A template to define task priority based on a variable.',
  'version': 1,
  'appliesTo': [
    'bpmn:Task'
  ],
  'elementType': {
    'value': 'bpmn:UserTask'
  },
  'properties': [
    {
      'type': 'Hidden',
      'binding': {
        'type': 'zeebe:userTask',
      }
    },
    {
      'label': 'Prio',
      'value': '100',
      'description': 'Prio for task',
      'constraints': {
        'notEmpty': true
      },
      'type': 'String',
      'binding': {
        'type': 'zeebe:priorityDefinition',
        'property': 'youShallNotPass'
      }
    }
  ]
};

export const errors = [
  {
    keyword: 'const',
    dataPath: '/properties/1/binding/property',
    schemaPath: '#/allOf/1/items/properties/binding/allOf/10/then/properties/property/const',
    params: {
      allowedValue: 'priority'
    },
    message: 'should be equal to constant'
  },
  {
    keyword: 'if',
    dataPath: '/properties/1/binding',
    schemaPath: '#/allOf/1/items/properties/binding/allOf/10/if',
    params: {
      failingKeyword: 'then'
    },
    message: 'should match "then" schema'
  },
  {
    keyword: 'type',
    dataPath: '',
    schemaPath: '#/oneOf/1/type',
    params: {
      type: 'array'
    },
    message: 'should be array'
  },
  {
    keyword: 'oneOf',
    dataPath: '',
    schemaPath: '#/oneOf',
    params: {
      passingSchemas: null
    },
    message: 'should match exactly one schema in oneOf'
  }
];