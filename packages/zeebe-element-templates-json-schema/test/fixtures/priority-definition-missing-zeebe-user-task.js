export const template = {
  'name': 'Priority Definition',
  'id': 'priority-definition',
  'description': 'A template to define task priority based on a variable.',
  'version': 1,
  'appliesTo': [
    'bpmn:Task'
  ],
  'elementType': {
    'value': 'bpmn:Task'
  },
  'properties': [
    {
      'label': 'Prio',
      'value': '100',
      'description': 'Prio for task',
      'constraints': {
        'notEmpty': true
      },
      'type': 'Dropdown',
      'binding': {
        'type': 'zeebe:priorityDefinition',
        'property': 'priority'
      },
      'choices': [
        {
          'name': 'High',
          'value': '100'
        },
        {
          'name': 'Medium',
          'value': '50'
        },
        {
          'name': 'Low',
          'value': '0'
        }
      ]
    }
  ]
};

export const errors = [
  {
    keyword: 'errorMessage',
    dataPath: '/properties',
    schemaPath: '#/allOf/1/allOf/4/then/properties/properties/errorMessage',
    params: {
      errors: [
        {
          keyword: 'const',
          dataPath: '/properties/0/binding/type',
          schemaPath: '#/allOf/1/allOf/4/then/properties/properties/contains/properties/binding/properties/type/const',
          params: {
            allowedValue: 'zeebe:userTask'
          },
          message: 'should be equal to constant',
          emUsed: true
        },
        {
          keyword: 'contains',
          dataPath: '/properties',
          schemaPath: '#/allOf/1/allOf/4/then/properties/properties/contains',
          params: {
            minContains: 1
          },
          message: 'should contain at least 1 valid item(s)',
          emUsed: true
        }
      ]
    },
    message: 'When using "zeebe:priorityDefinition", "zeebe:userTask" must be set on the same element'
  },
  {
    keyword: 'if',
    dataPath: '',
    schemaPath: '#/allOf/1/allOf/4/if',
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