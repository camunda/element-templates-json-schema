export const template = {
  'name': 'MissingBindingName',
  'id': 'com.camunda.example.MissingBindingName',
  'appliesTo': [
    'bpmn:IntermediateCatchEvent'
  ],
  'elementType': {
    value: 'bpmn:IntermediateCatchEvent'
  },
  'properties': [
    {
      'label': 'foo',
      'type': 'String',
      'binding': {
        'type': 'bpmn:Message#zeebe:subscription#property',
        'name': 'correlationKey'
      }
    }
  ]
};

export const errors = [
  {
    keyword: 'required',
    dataPath: '/elementType',
    schemaPath: '#/allOf/1/then/properties/elementType/required',
    params: {
      missingProperty: 'eventDefinition'
    },
    message: 'should have required property \'eventDefinition\''
  },
  {
    keyword: 'if',
    dataPath: '',
    schemaPath: '#/allOf/1/if',
    params: {
      'failingKeyword': 'then'
    },
    message: 'should match "then" schema'
  },
  {
    dataPath: '',
    keyword: 'type',
    message: 'should be array',
    params: {
      type: 'array',
    },
    schemaPath: '#/oneOf/1/type',
  },
  {
    dataPath: '',
    keyword: 'oneOf',
    message: 'should match exactly one schema in oneOf',
    params: {
      passingSchemas: null
    },
    schemaPath: '#/oneOf'
  }
];
