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
      'value': '1',
      'type': 'String',
      'binding': {
        'type': 'zeebe:priorityDefinition',
        'property': 'priority'
      }
    },
    {
      'label': 'Prio 2',
      'value': '1',
      'type': 'String',
      'feel': 'optional',
      'binding': {
        'type': 'zeebe:priorityDefinition',
        'property': 'priority'
      }
    },
    {
      'label': 'Prio 3',
      'value': true,
      'type': 'Boolean',
      'binding': {
        'type': 'zeebe:priorityDefinition',
        'property': 'priority'
      }
    },
    {
      'label': 'Prio 4',
      'value': '1',
      'type': 'Text',
      'binding': {
        'type': 'zeebe:priorityDefinition',
        'property': 'priority'
      }
    },
  ]
};

export const errors = [
  {
    keyword: 'enum',
    dataPath: '/properties/1/type',
    schemaPath: '#/allOf/1/items/allOf/23/then/anyOf/0/properties/type/enum',
    params: {
      allowedValues: [
        'Hidden',
        'Number',
        'Dropdown'
      ]
    },
    message: 'should be equal to one of the allowed values'
  },
  {
    keyword: 'required',
    dataPath: '/properties/1',
    schemaPath: '#/allOf/1/items/allOf/23/then/anyOf/1/required',
    params: {
      missingProperty: 'feel'
    },
    message: "should have required property 'feel'"
  },
  {
    keyword: 'anyOf',
    dataPath: '/properties/1',
    schemaPath: '#/allOf/1/items/allOf/23/then/anyOf',
    params: {},
    message: 'should match some schema in anyOf'
  },
  {
    keyword: 'if',
    dataPath: '/properties/1',
    schemaPath: '#/allOf/1/items/allOf/23/if',
    params: {
      failingKeyword: 'then'
    },
    message: 'should match "then" schema'
  },
  {
    keyword: 'enum',
    dataPath: '/properties/2/type',
    schemaPath: '#/allOf/1/items/allOf/23/then/anyOf/0/properties/type/enum',
    params: {
      allowedValues: [
        'Hidden',
        'Number',
        'Dropdown'
      ]
    },
    message: 'should be equal to one of the allowed values'
  },
  {
    keyword: 'const',
    dataPath: '/properties/2/feel',
    schemaPath: '#/allOf/1/items/allOf/23/then/anyOf/1/properties/feel/const',
    params: {
      allowedValue: 'required'
    },
    message: 'should be equal to constant'
  },
  {
    keyword: 'anyOf',
    dataPath: '/properties/2',
    schemaPath: '#/allOf/1/items/allOf/23/then/anyOf',
    params: {},
    message: 'should match some schema in anyOf'
  },
  {
    keyword: 'if',
    dataPath: '/properties/2',
    schemaPath: '#/allOf/1/items/allOf/23/if',
    params: {
      failingKeyword: 'then'
    },
    message: 'should match "then" schema'
  },
  {
    keyword: 'enum',
    dataPath: '/properties/3/type',
    schemaPath: '#/allOf/1/items/allOf/23/then/anyOf/0/properties/type/enum',
    params: {
      allowedValues: [
        'Hidden',
        'Number',
        'Dropdown'
      ]
    },
    message: 'should be equal to one of the allowed values'
  },
  {
    keyword: 'required',
    dataPath: '/properties/3',
    schemaPath: '#/allOf/1/items/allOf/23/then/anyOf/1/required',
    params: {
      missingProperty: 'feel'
    },
    message: "should have required property 'feel'"
  },
  {
    keyword: 'enum',
    dataPath: '/properties/3/type',
    schemaPath: '#/allOf/1/items/allOf/23/then/anyOf/1/properties/type/enum',
    params: {
      allowedValues: [
        'String',
        'Text'
      ]
    },
    message: 'should be equal to one of the allowed values'
  },
  {
    keyword: 'anyOf',
    dataPath: '/properties/3',
    schemaPath: '#/allOf/1/items/allOf/23/then/anyOf',
    params: {},
    message: 'should match some schema in anyOf'
  },
  {
    keyword: 'if',
    dataPath: '/properties/3',
    schemaPath: '#/allOf/1/items/allOf/23/if',
    params: {
      failingKeyword: 'then'
    },
    message: 'should match "then" schema'
  },
  {
    keyword: 'enum',
    dataPath: '/properties/4/type',
    schemaPath: '#/allOf/1/items/allOf/23/then/anyOf/0/properties/type/enum',
    params: {
      allowedValues: [
        'Hidden',
        'Number',
        'Dropdown'
      ]
    },
    message: 'should be equal to one of the allowed values'
  },
  {
    keyword: 'required',
    dataPath: '/properties/4',
    schemaPath: '#/allOf/1/items/allOf/23/then/anyOf/1/required',
    params: {
      missingProperty: 'feel'
    },
    message: "should have required property 'feel'"
  },
  {
    keyword: 'anyOf',
    dataPath: '/properties/4',
    schemaPath: '#/allOf/1/items/allOf/23/then/anyOf',
    params: {},
    message: 'should match some schema in anyOf'
  },
  {
    keyword: 'if',
    dataPath: '/properties/4',
    schemaPath: '#/allOf/1/items/allOf/23/if',
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