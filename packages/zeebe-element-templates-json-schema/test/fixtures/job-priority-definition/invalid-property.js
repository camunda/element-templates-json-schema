export const template = {
  'name': 'Job Priority Definition',
  'id': 'job-priority-definition',
  'description': 'A template to define job priority.',
  'version': 1,
  'appliesTo': [
    'bpmn:Task'
  ],
  'elementType': {
    'value': 'bpmn:ServiceTask'
  },
  'properties': [
    {
      'type': 'Hidden',
      'value': 'my-job-worker',
      'binding': {
        'type': 'zeebe:taskDefinition',
        'property': 'type'
      }
    },
    {
      'label': 'Prio',
      'value': '90',
      'description': 'Prio for job',
      'constraints': {
        'notEmpty': true
      },
      'type': 'String',
      'binding': {
        'type': 'zeebe:jobPriorityDefinition',
        'property': 'youShallNotPass'
      }
    }
  ]
};

export const errors = [
  {
    keyword: 'const',
    dataPath: '/properties/1/binding/property',
    schemaPath: '#/allOf/1/items/properties/binding/allOf/18/then/properties/property/const',
    params: {
      allowedValue: 'priority'
    },
    message: 'should be equal to constant'
  },
  {
    keyword: 'if',
    dataPath: '/properties/1/binding',
    schemaPath: '#/allOf/1/items/properties/binding/allOf/18/if',
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
