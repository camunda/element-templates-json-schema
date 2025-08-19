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
      'value': 'tomorrow',
      'binding': {
        'type': 'zeebe:taskSchedule',
        'property': 'dueDate'
      }
    },
    {
      'type': 'String',
      'value': '2020/10/01T12:00:00Z',
      'binding': {
        'type': 'zeebe:taskSchedule',
        'property': 'followUpDate'
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