export const template = {
  '$schema': 'https://unpkg.com/@camunda/zeebe-element-templates-json-schema/resources/schema.json',
  'id': 'io.camunda.examples.Payment',
  'name': 'Payment',
  'description': 'Payment process call activity',
  'appliesTo': [
    'bpmn:Task'
  ],
  'elementType': {
    'value': 'bpmn:CallActivity'
  },
  'properties': [
    {
      'type': 'Hidden',
      'value': 'paymentProcess',
      'binding': {
        'type': 'zeebe:calledElement',
        'property': 'processId'
      }
    },
    {
      'label': 'Business ID',
      'type': 'String',
      'feel': 'optional',
      'value': 'a'.repeat(256),
      'binding': {
        'type': 'zeebe:calledElement',
        'property': 'businessId'
      }
    }
  ]
};

export const errors = [
  {
    keyword: 'maxLength',
    dataPath: '/properties/1/value',
    schemaPath: '#/allOf/1/items/allOf/35/then/properties/value/then/maxLength',
    params: {
      limit: 255
    },
    message: 'should NOT have more than 255 characters'
  },
  {
    keyword: 'if',
    dataPath: '/properties/1/value',
    schemaPath: '#/allOf/1/items/allOf/35/then/properties/value/if',
    params: {
      failingKeyword: 'then'
    },
    message: 'should match "then" schema'
  },
  {
    keyword: 'if',
    dataPath: '/properties/1',
    schemaPath: '#/allOf/1/items/allOf/35/if',
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
