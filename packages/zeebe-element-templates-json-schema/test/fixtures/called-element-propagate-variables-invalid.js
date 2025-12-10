export const template = {
  '$schema': 'https://unpkg.com/@camunda/zeebe-element-templates-json-schema/resources/schema.json',
  'id': 'io.camunda.examples.Payment',
  'name': 'Payment',
  'description': 'Payment process call activity',
  'appliesTo': [
    'bpmn:Task',
    'bpmn:CallActivity'
  ],
  'elementType': {
    'value': 'bpmn:CallActivity'
  },
  'properties': [
    {
      'type': 'String',
      'value': 'yes',
      'binding': {
        'type': 'zeebe:calledElement',
        'property': 'propagateAllParentVariables'
      }
    },
    {
      'type': 'Boolean',
      'value': true,
      'feel': 'optional',
      'binding': {
        'type': 'zeebe:calledElement',
        'property': 'propagateAllChildVariables'
      }
    },
    {
      'type': 'Hidden',
      'value': 'notBooleanValue',
      'binding': {
        'type': 'zeebe:calledElement',
        'property': 'propagateAllChildVariables'
      }
    },
    {
      'type': 'Boolean',
      'value': 'notBooleanValue',
      'binding': {
        'type': 'zeebe:calledElement',
        'property': 'propagateAllChildVariables'
      }
    },
    {
      'type': 'Hidden',
      'value': 'processId',
      'binding': {
        'type': 'zeebe:calledElement',
        'property': 'processId'
      }
    },
  ]
};

export const errors = [
  {
    keyword: 'enum',
    dataPath: '/properties/0/type',
    schemaPath: '#/allOf/1/items/allOf/26/then/properties/type/enum',
    params: {
      allowedValues: [
        'Hidden',
        'Boolean'
      ]
    },
    message: 'should be equal to one of the allowed values'
  },
  {
    keyword: 'type',
    dataPath: '/properties/0/value',
    schemaPath: '#/allOf/1/items/allOf/26/then/properties/value/type',
    params: {
      type: 'boolean'
    },
    message: 'should be boolean'
  },
  {
    keyword: 'if',
    dataPath: '/properties/0',
    schemaPath: '#/allOf/1/items/allOf/26/if',
    params: {
      failingKeyword: 'then'
    },
    message: 'should match "then" schema'
  },
  {
    keyword: 'errorMessage',
    dataPath: '/properties/1',
    schemaPath: '#/allOf/1/items/allOf/26/then/errorMessage',
    params: {
      errors: [
        {
          keyword: 'not',
          dataPath: '/properties/1',
          schemaPath: '#/allOf/1/items/allOf/26/then/not',
          params: {},
          message: 'should NOT be valid',
          emUsed: true
        }
      ]
    },
    message: 'FEEL is not supported for `zeebe:calledElement` variable propagation properties'
  },
  {
    keyword: 'if',
    dataPath: '/properties/1',
    schemaPath: '#/allOf/1/items/allOf/26/if',
    params: {
      failingKeyword: 'then'
    },
    message: 'should match "then" schema'
  },
  {
    keyword: 'type',
    dataPath: '/properties/2/value',
    schemaPath: '#/allOf/1/items/allOf/26/then/properties/value/type',
    params: {
      type: 'boolean'
    },
    message: 'should be boolean'
  },
  {
    keyword: 'if',
    dataPath: '/properties/2',
    schemaPath: '#/allOf/1/items/allOf/26/if',
    params: {
      failingKeyword: 'then'
    },
    message: 'should match "then" schema'
  },
  {
    keyword: 'type',
    dataPath: '/properties/3/value',
    schemaPath: '#/allOf/1/items/allOf/26/then/properties/value/type',
    params: {
      type: 'boolean'
    },
    message: 'should be boolean'
  },
  {
    keyword: 'if',
    dataPath: '/properties/3',
    schemaPath: '#/allOf/1/items/allOf/26/if',
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
