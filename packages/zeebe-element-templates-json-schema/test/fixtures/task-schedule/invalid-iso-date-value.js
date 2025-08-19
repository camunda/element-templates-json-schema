export const template = {
  'name': 'task schedule',
  'id': 'task-schedule-1',
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
      'type': 'String',
      'value': '2025-08-11_14:30:00Z',
      'description': 'Uses "_" instead of "T" as date-time separator',
      'binding': {
        'type': 'zeebe:taskSchedule',
        'property': 'dueDate'
      }
    },
    {
      'type': 'String',
      'value': '2025-13-05T10:15:30Z',
      'description': 'Month value is out of range (13)',
      'binding': {
        'type': 'zeebe:taskSchedule',
        'property': 'dueDate'
      }
    },
    {
      'type': 'String',
      'value': '2025-08-11T14:30:00.1234567890Z',
      'description': 'Too many fractional second digits',
      'binding': {
        'type': 'zeebe:taskSchedule',
        'property': 'dueDate'
      }
    },
    {
      'type': 'String',
      'value': '2025-08-11t14:30:00Z',
      'description': 'Lowercase "t" instead of uppercase "T" separator',
      'binding': {
        'type': 'zeebe:taskSchedule',
        'property': 'dueDate'
      }
    },
    {
      'type': 'String',
      'value': '2025-08-11T14:30:00+05',
      'description': 'Timezone offset missing minutes component',
      'binding': {
        'type': 'zeebe:taskSchedule',
        'property': 'dueDate'
      }
    },
    {
      'type': 'String',
      'value': '2025-02-30T09:00:00Z',
      'description': 'Invalid day for February (30)',
      'binding': {
        'type': 'zeebe:taskSchedule',
        'property': 'dueDate'
      }
    },
    {
      'type': 'String',
      'value': '2025-8-11T14:30:00Z',
      'description': 'Month missing leading zero (should be 08)',
      'binding': {
        'type': 'zeebe:taskSchedule',
        'property': 'dueDate'
      }
    },
    {
      'type': 'String',
      'value': '2025-08-11 14:30:00Z',
      'description': 'Uses space instead of "T" as date-time separator',
      'binding': {
        'type': 'zeebe:taskSchedule',
        'property': 'dueDate'
      }
    },
    {
      'type': 'String',
      'value': '2025-08-11T14:30:00+05:',
      'description': 'Incomplete timezone offset (missing minutes)',
      'binding': {
        'type': 'zeebe:taskSchedule',
        'property': 'dueDate'
      }
    },
    {
      'type': 'String',
      'value': '2025-06-30T23:59:60Z',
      'description': 'Leap second value (60 seconds) not widely supported',
      'binding': {
        'type': 'zeebe:taskSchedule',
        'property': 'dueDate'
      }
    }
  ]
};

export const errors = [
  {
    keyword: 'errorMessage',
    dataPath: '/properties/1/value',
    schemaPath: '#/allOf/1/items/allOf/24/allOf/1/then/properties/value/errorMessage',
    params: {
      errors: [
        {
          keyword: 'pattern',
          dataPath: '/properties/1/value',
          schemaPath: '#/allOf/1/items/allOf/24/allOf/1/then/properties/value/pattern',
          params: {
            pattern: '^(?<date>\\d{4}-(?<month>0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01]))T(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](Z|([+-](0[0-9]|1[0-3]):[0-5][0-9](\\[[^\\]]+\\])?))$'
          },
          message: 'should match pattern "^(?<date>\\d{4}-(?<month>0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01]))T(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](Z|([+-](0[0-9]|1[0-3]):[0-5][0-9](\\[[^\\]]+\\])?))$"',
          emUsed: true
        }
      ]
    },
    message: 'Must be conforming to an ISO 8601 combined date and time representation'
  },
  {
    keyword: 'if',
    dataPath: '/properties/1',
    schemaPath: '#/allOf/1/items/allOf/24/allOf/1/if',
    params: {
      failingKeyword: 'then'
    },
    message: 'should match "then" schema'
  },
  {
    keyword: 'errorMessage',
    dataPath: '/properties/2/value',
    schemaPath: '#/allOf/1/items/allOf/24/allOf/1/then/properties/value/errorMessage',
    params: {
      errors: [
        {
          keyword: 'pattern',
          dataPath: '/properties/2/value',
          schemaPath: '#/allOf/1/items/allOf/24/allOf/1/then/properties/value/pattern',
          params: {
            pattern: '^(?<date>\\d{4}-(?<month>0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01]))T(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](Z|([+-](0[0-9]|1[0-3]):[0-5][0-9](\\[[^\\]]+\\])?))$'
          },
          message: 'should match pattern "^(?<date>\\d{4}-(?<month>0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01]))T(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](Z|([+-](0[0-9]|1[0-3]):[0-5][0-9](\\[[^\\]]+\\])?))$"',
          emUsed: true
        }
      ]
    },
    message: 'Must be conforming to an ISO 8601 combined date and time representation'
  },
  {
    keyword: 'if',
    dataPath: '/properties/2',
    schemaPath: '#/allOf/1/items/allOf/24/allOf/1/if',
    params: {
      failingKeyword: 'then'
    },
    message: 'should match "then" schema'
  },
  {
    keyword: 'errorMessage',
    dataPath: '/properties/3/value',
    schemaPath: '#/allOf/1/items/allOf/24/allOf/1/then/properties/value/errorMessage',
    params: {
      errors: [
        {
          keyword: 'pattern',
          dataPath: '/properties/3/value',
          schemaPath: '#/allOf/1/items/allOf/24/allOf/1/then/properties/value/pattern',
          params: {
            pattern: '^(?<date>\\d{4}-(?<month>0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01]))T(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](Z|([+-](0[0-9]|1[0-3]):[0-5][0-9](\\[[^\\]]+\\])?))$'
          },
          message: 'should match pattern "^(?<date>\\d{4}-(?<month>0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01]))T(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](Z|([+-](0[0-9]|1[0-3]):[0-5][0-9](\\[[^\\]]+\\])?))$"',
          emUsed: true
        }
      ]
    },
    message: 'Must be conforming to an ISO 8601 combined date and time representation'
  },
  {
    keyword: 'if',
    dataPath: '/properties/3',
    schemaPath: '#/allOf/1/items/allOf/24/allOf/1/if',
    params: {
      failingKeyword: 'then'
    },
    message: 'should match "then" schema'
  },
  {
    keyword: 'errorMessage',
    dataPath: '/properties/4/value',
    schemaPath: '#/allOf/1/items/allOf/24/allOf/1/then/properties/value/errorMessage',
    params: {
      errors: [
        {
          keyword: 'pattern',
          dataPath: '/properties/4/value',
          schemaPath: '#/allOf/1/items/allOf/24/allOf/1/then/properties/value/pattern',
          params: {
            pattern: '^(?<date>\\d{4}-(?<month>0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01]))T(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](Z|([+-](0[0-9]|1[0-3]):[0-5][0-9](\\[[^\\]]+\\])?))$'
          },
          message: 'should match pattern "^(?<date>\\d{4}-(?<month>0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01]))T(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](Z|([+-](0[0-9]|1[0-3]):[0-5][0-9](\\[[^\\]]+\\])?))$"',
          emUsed: true
        }
      ]
    },
    message: 'Must be conforming to an ISO 8601 combined date and time representation'
  },
  {
    keyword: 'if',
    dataPath: '/properties/4',
    schemaPath: '#/allOf/1/items/allOf/24/allOf/1/if',
    params: {
      failingKeyword: 'then'
    },
    message: 'should match "then" schema'
  },
  {
    keyword: 'errorMessage',
    dataPath: '/properties/5/value',
    schemaPath: '#/allOf/1/items/allOf/24/allOf/1/then/properties/value/errorMessage',
    params: {
      errors: [
        {
          keyword: 'pattern',
          dataPath: '/properties/5/value',
          schemaPath: '#/allOf/1/items/allOf/24/allOf/1/then/properties/value/pattern',
          params: {
            pattern: '^(?<date>\\d{4}-(?<month>0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01]))T(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](Z|([+-](0[0-9]|1[0-3]):[0-5][0-9](\\[[^\\]]+\\])?))$'
          },
          message: 'should match pattern "^(?<date>\\d{4}-(?<month>0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01]))T(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](Z|([+-](0[0-9]|1[0-3]):[0-5][0-9](\\[[^\\]]+\\])?))$"',
          emUsed: true
        }
      ]
    },
    message: 'Must be conforming to an ISO 8601 combined date and time representation'
  },
  {
    keyword: 'if',
    dataPath: '/properties/5',
    schemaPath: '#/allOf/1/items/allOf/24/allOf/1/if',
    params: {
      failingKeyword: 'then'
    },
    message: 'should match "then" schema'
  },
  {
    keyword: 'errorMessage',
    dataPath: '/properties/7/value',
    schemaPath: '#/allOf/1/items/allOf/24/allOf/1/then/properties/value/errorMessage',
    params: {
      errors: [
        {
          keyword: 'pattern',
          dataPath: '/properties/7/value',
          schemaPath: '#/allOf/1/items/allOf/24/allOf/1/then/properties/value/pattern',
          params: {
            pattern: '^(?<date>\\d{4}-(?<month>0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01]))T(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](Z|([+-](0[0-9]|1[0-3]):[0-5][0-9](\\[[^\\]]+\\])?))$'
          },
          message: 'should match pattern "^(?<date>\\d{4}-(?<month>0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01]))T(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](Z|([+-](0[0-9]|1[0-3]):[0-5][0-9](\\[[^\\]]+\\])?))$"',
          emUsed: true
        }
      ]
    },
    message: 'Must be conforming to an ISO 8601 combined date and time representation'
  },
  {
    keyword: 'if',
    dataPath: '/properties/7',
    schemaPath: '#/allOf/1/items/allOf/24/allOf/1/if',
    params: {
      failingKeyword: 'then'
    },
    message: 'should match "then" schema'
  },
  {
    keyword: 'errorMessage',
    dataPath: '/properties/8/value',
    schemaPath: '#/allOf/1/items/allOf/24/allOf/1/then/properties/value/errorMessage',
    params: {
      errors: [
        {
          keyword: 'pattern',
          dataPath: '/properties/8/value',
          schemaPath: '#/allOf/1/items/allOf/24/allOf/1/then/properties/value/pattern',
          params: {
            pattern: '^(?<date>\\d{4}-(?<month>0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01]))T(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](Z|([+-](0[0-9]|1[0-3]):[0-5][0-9](\\[[^\\]]+\\])?))$'
          },
          message: 'should match pattern "^(?<date>\\d{4}-(?<month>0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01]))T(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](Z|([+-](0[0-9]|1[0-3]):[0-5][0-9](\\[[^\\]]+\\])?))$"',
          emUsed: true
        }
      ]
    },
    message: 'Must be conforming to an ISO 8601 combined date and time representation'
  },
  {
    keyword: 'if',
    dataPath: '/properties/8',
    schemaPath: '#/allOf/1/items/allOf/24/allOf/1/if',
    params: {
      failingKeyword: 'then'
    },
    message: 'should match "then" schema'
  },
  {
    keyword: 'errorMessage',
    dataPath: '/properties/9/value',
    schemaPath: '#/allOf/1/items/allOf/24/allOf/1/then/properties/value/errorMessage',
    params: {
      errors: [
        {
          keyword: 'pattern',
          dataPath: '/properties/9/value',
          schemaPath: '#/allOf/1/items/allOf/24/allOf/1/then/properties/value/pattern',
          params: {
            pattern: '^(?<date>\\d{4}-(?<month>0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01]))T(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](Z|([+-](0[0-9]|1[0-3]):[0-5][0-9](\\[[^\\]]+\\])?))$'
          },
          message: 'should match pattern "^(?<date>\\d{4}-(?<month>0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01]))T(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](Z|([+-](0[0-9]|1[0-3]):[0-5][0-9](\\[[^\\]]+\\])?))$"',
          emUsed: true
        }
      ]
    },
    message: 'Must be conforming to an ISO 8601 combined date and time representation'
  },
  {
    keyword: 'if',
    dataPath: '/properties/9',
    schemaPath: '#/allOf/1/items/allOf/24/allOf/1/if',
    params: {
      failingKeyword: 'then'
    },
    message: 'should match "then" schema'
  },
  {
    keyword: 'errorMessage',
    dataPath: '/properties/10/value',
    schemaPath: '#/allOf/1/items/allOf/24/allOf/1/then/properties/value/errorMessage',
    params: {
      errors: [
        {
          keyword: 'pattern',
          dataPath: '/properties/10/value',
          schemaPath: '#/allOf/1/items/allOf/24/allOf/1/then/properties/value/pattern',
          params: {
            pattern: '^(?<date>\\d{4}-(?<month>0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01]))T(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](Z|([+-](0[0-9]|1[0-3]):[0-5][0-9](\\[[^\\]]+\\])?))$'
          },
          message: 'should match pattern "^(?<date>\\d{4}-(?<month>0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01]))T(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](Z|([+-](0[0-9]|1[0-3]):[0-5][0-9](\\[[^\\]]+\\])?))$"',
          emUsed: true
        }
      ]
    },
    message: 'Must be conforming to an ISO 8601 combined date and time representation'
  },
  {
    keyword: 'if',
    dataPath: '/properties/10',
    schemaPath: '#/allOf/1/items/allOf/24/allOf/1/if',
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