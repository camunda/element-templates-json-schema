export const template = {
  name: 'Priority Definition',
  id: 'priority-definition',
  description: 'A template to define task priority based on a variable.',
  version: 1,
  appliesTo: [
    'bpmn:Task'
  ],
  elementType: {
    value: 'bpmn:UserTask'
  },
  properties: [
    {
      type: 'Hidden',
      binding: {
        type: 'zeebe:userTask',
      }
    },
    {
      label: 'Prio',
      value: -1,
      description: 'Prio for task',
      type: 'Number',
      binding: {
        type: 'zeebe:priorityDefinition',
        property: 'priority'
      }
    },
    {
      label: 'Prio',
      value: 101,
      description: 'Prio for task',
      type: 'Number',
      binding: {
        type: 'zeebe:priorityDefinition',
        property: 'priority'
      }
    },
    {
      value: '101',
      type: 'Hidden',
      binding: {
        type: 'zeebe:priorityDefinition',
        property: 'priority'
      }
    },
    {
      value: '-1',
      type: 'Hidden',
      binding: {
        type: 'zeebe:priorityDefinition',
        property: 'priority'
      }
    },
    {
      'label': 'Prio',
      'value': '101',
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
          'name': 'Too High',
          'value': '101'
        },
        {
          'name': 'Not a number',
          'value': 'abcd'
        },
        {
          'name': 'Too Low',
          'value': '-1'
        }
      ]
    }


  ]
};

export const errors = [
  {
    keyword: 'minimum',
    dataPath: '/properties/1/value',
    schemaPath: '#/allOf/1/items/allOf/22/allOf/1/then/properties/value/minimum',
    params: {
      comparison: '>=',
      limit: 0
    },
    message: 'should be >= 0'
  },
  {
    keyword: 'if',
    dataPath: '/properties/1',
    schemaPath: '#/allOf/1/items/allOf/22/allOf/1/if',
    params: {
      failingKeyword: 'then'
    },
    message: 'should match "then" schema'
  },
  {
    keyword: 'maximum',
    dataPath: '/properties/2/value',
    schemaPath: '#/allOf/1/items/allOf/22/allOf/1/then/properties/value/maximum',
    params: {
      comparison: '<=',
      limit: 100
    },
    message: 'should be <= 100'
  },
  {
    keyword: 'if',
    dataPath: '/properties/2',
    schemaPath: '#/allOf/1/items/allOf/22/allOf/1/if',
    params: {
      failingKeyword: 'then'
    },
    message: 'should match "then" schema'
  },
  {
    keyword: 'errorMessage',
    dataPath: '/properties/3/value',
    schemaPath: '#/allOf/1/items/allOf/22/allOf/2/then/properties/value/errorMessage',
    params: {
      errors: [
        {
          keyword: 'pattern',
          dataPath: '/properties/3/value',
          schemaPath: '#/allOf/1/items/allOf/22/allOf/2/then/properties/value/pattern',
          params: {
            pattern: '^(100|[1-9]?[0-9])$'
          },
          message: 'should match pattern "^(100|[1-9]?[0-9])$"',
          emUsed: true
        }
      ]
    },
    message: 'Invalid value for priority. Must be between 0 and 100.'
  },
  {
    keyword: 'if',
    dataPath: '/properties/3',
    schemaPath: '#/allOf/1/items/allOf/22/allOf/2/if',
    params: {
      failingKeyword: 'then'
    },
    message: 'should match "then" schema'
  },
  {
    keyword: 'errorMessage',
    dataPath: '/properties/4/value',
    schemaPath: '#/allOf/1/items/allOf/22/allOf/2/then/properties/value/errorMessage',
    params: {
      errors: [
        {
          keyword: 'pattern',
          dataPath: '/properties/4/value',
          schemaPath: '#/allOf/1/items/allOf/22/allOf/2/then/properties/value/pattern',
          params: {
            pattern: '^(100|[1-9]?[0-9])$'
          },
          message: 'should match pattern "^(100|[1-9]?[0-9])$"',
          emUsed: true
        }
      ]
    },
    message: 'Invalid value for priority. Must be between 0 and 100.'
  },
  {
    keyword: 'if',
    dataPath: '/properties/4',
    schemaPath: '#/allOf/1/items/allOf/22/allOf/2/if',
    params: {
      failingKeyword: 'then'
    },
    message: 'should match "then" schema'
  },
  {
    keyword: 'errorMessage',
    dataPath: '/properties/5/value',
    schemaPath: '#/allOf/1/items/allOf/22/allOf/2/then/properties/value/errorMessage',
    params: {
      errors: [
        {
          keyword: 'pattern',
          dataPath: '/properties/5/value',
          schemaPath: '#/allOf/1/items/allOf/22/allOf/2/then/properties/value/pattern',
          params: {
            pattern: '^(100|[1-9]?[0-9])$'
          },
          message: 'should match pattern "^(100|[1-9]?[0-9])$"',
          emUsed: true
        }
      ]
    },
    message: 'Invalid value for priority. Must be between 0 and 100.'
  },
  {
    keyword: 'if',
    dataPath: '/properties/5',
    schemaPath: '#/allOf/1/items/allOf/22/allOf/2/if',
    params: {
      failingKeyword: 'then'
    },
    message: 'should match "then" schema'
  },
  {
    keyword: 'errorMessage',
    dataPath: '/properties/5/choices/0/value',
    schemaPath: '#/allOf/1/items/allOf/22/allOf/3/then/properties/choices/items/properties/value/errorMessage',
    params: {
      errors: [
        {
          keyword: 'pattern',
          dataPath: '/properties/5/choices/0/value',
          schemaPath: '#/allOf/1/items/allOf/22/allOf/3/then/properties/choices/items/properties/value/pattern',
          params: {
            pattern: '^(100|[1-9]?[0-9])$'
          },
          message: 'should match pattern "^(100|[1-9]?[0-9])$"',
          emUsed: true
        }
      ]
    },
    message: 'Invalid value for priority. Must be between 0 and 100.'
  },
  {
    keyword: 'errorMessage',
    dataPath: '/properties/5/choices/1/value',
    schemaPath: '#/allOf/1/items/allOf/22/allOf/3/then/properties/choices/items/properties/value/errorMessage',
    params: {
      errors: [
        {
          keyword: 'pattern',
          dataPath: '/properties/5/choices/1/value',
          schemaPath: '#/allOf/1/items/allOf/22/allOf/3/then/properties/choices/items/properties/value/pattern',
          params: {
            pattern: '^(100|[1-9]?[0-9])$'
          },
          message: 'should match pattern "^(100|[1-9]?[0-9])$"',
          emUsed: true
        }
      ]
    },
    message: 'Invalid value for priority. Must be between 0 and 100.'
  },
  {
    keyword: 'errorMessage',
    dataPath: '/properties/5/choices/2/value',
    schemaPath: '#/allOf/1/items/allOf/22/allOf/3/then/properties/choices/items/properties/value/errorMessage',
    params: {
      errors: [
        {
          keyword: 'pattern',
          dataPath: '/properties/5/choices/2/value',
          schemaPath: '#/allOf/1/items/allOf/22/allOf/3/then/properties/choices/items/properties/value/pattern',
          params: {
            pattern: '^(100|[1-9]?[0-9])$'
          },
          message: 'should match pattern "^(100|[1-9]?[0-9])$"',
          emUsed: true
        }
      ]
    },
    message: 'Invalid value for priority. Must be between 0 and 100.'
  },
  {
    keyword: 'if',
    dataPath: '/properties/5',
    schemaPath: '#/allOf/1/items/allOf/22/allOf/3/if',
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