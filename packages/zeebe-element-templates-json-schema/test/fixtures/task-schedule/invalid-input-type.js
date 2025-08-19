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
      'type': 'Number',
      'binding': {
        'type': 'zeebe:taskSchedule',
        'property': 'dueDate'
      }
    },
    {
      'type': 'Number',
      'binding': {
        'type': 'zeebe:taskSchedule',
        'property': 'followUpDate'
      }
    },
    {
      'type': 'Boolean',
      'binding': {
        'type': 'zeebe:taskSchedule',
        'property': 'dueDate'
      }
    }
    ,
    {
      'type': 'Boolean',
      'binding': {
        'type': 'zeebe:taskSchedule',
        'property': 'followUpDate'
      }
    }
  ]
};

export const errors = [
  {
    keyword: 'enum',
    dataPath: '/properties/1/type',
    schemaPath: '#/allOf/1/items/allOf/24/allOf/0/then/properties/type/enum',
    params: {
      allowedValues: [
        'Hidden',
        'String',
        'Dropdown',
        'Text'
      ]
    },
    message: 'should be equal to one of the allowed values'
  },
  {
    keyword: 'if',
    dataPath: '/properties/1',
    schemaPath: '#/allOf/1/items/allOf/24/allOf/0/if',
    params: {
      failingKeyword: 'then'
    },
    message: 'should match "then" schema'
  },
  {
    keyword: 'enum',
    dataPath: '/properties/2/type',
    schemaPath: '#/allOf/1/items/allOf/24/allOf/0/then/properties/type/enum',
    params: {
      allowedValues: [
        'Hidden',
        'String',
        'Dropdown',
        'Text'
      ]
    },
    message: 'should be equal to one of the allowed values'
  },
  {
    keyword: 'if',
    dataPath: '/properties/2',
    schemaPath: '#/allOf/1/items/allOf/24/allOf/0/if',
    params: {
      failingKeyword: 'then'
    },
    message: 'should match "then" schema'
  },
  {
    keyword: 'enum',
    dataPath: '/properties/3/type',
    schemaPath: '#/allOf/1/items/allOf/24/allOf/0/then/properties/type/enum',
    params: {
      allowedValues: [
        'Hidden',
        'String',
        'Dropdown',
        'Text'
      ]
    },
    message: 'should be equal to one of the allowed values'
  },
  {
    keyword: 'if',
    dataPath: '/properties/3',
    schemaPath: '#/allOf/1/items/allOf/24/allOf/0/if',
    params: {
      failingKeyword: 'then'
    },
    message: 'should match "then" schema'
  },
  {
    keyword: 'enum',
    dataPath: '/properties/4/type',
    schemaPath: '#/allOf/1/items/allOf/24/allOf/0/then/properties/type/enum',
    params: {
      allowedValues: [
        'Hidden',
        'String',
        'Dropdown',
        'Text'
      ]
    },
    message: 'should be equal to one of the allowed values'
  },
  {
    keyword: 'if',
    dataPath: '/properties/4',
    schemaPath: '#/allOf/1/items/allOf/24/allOf/0/if',
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
]
;