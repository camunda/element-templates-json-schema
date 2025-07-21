export const template = {
  '$schema': 'https://unpkg.com/@camunda/zeebe-element-templates-json-schema/resources/schema.json',
  'name': 'Form Definition with FormId',
  'id': 'formDefinitionWithFormId',
  'appliesTo': [
    'bpmn:Task'
  ],
  'elementType': {
    'value': 'bpmn:ServiceTask'
  },
  'properties': [
    {
      'type': 'Hidden',
      'value': 'youShallNotPass',
      'binding': {
        'type': 'zeebe:linkedResource',
        'linkName': 'persistedLink',
        'property': 'bindingType'
      }
    }
  ]
};


export const errors = [
  {
    keyword: 'enum',
    dataPath: '/properties/0/value',
    schemaPath: '#/allOf/1/items/allOf/20/allOf/0/then/properties/value/enum',
    params: {
      allowedValues: [
        'latest',
        'versionTag',
        'deployment'
      ]
    },
    message: 'should be equal to one of the allowed values'
  },
  {
    keyword: 'if',
    dataPath: '/properties/0',
    schemaPath: '#/allOf/1/items/allOf/20/allOf/0/if',
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