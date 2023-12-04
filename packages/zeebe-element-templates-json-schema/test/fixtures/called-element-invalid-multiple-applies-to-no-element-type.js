export const template = {
  '$schema': 'https://unpkg.com/@camunda/zeebe-element-templates-json-schema/resources/schema.json',
  'id': 'io.camunda.examples.Payment',
  'name': 'Payment',
  'description': 'Payment process call activity',
  'appliesTo': [
    'bpmn:Task',
    'bpmn:CallActivity'
  ],
  'properties':[
    {
      'type': 'Hidden',
      'value': 'paymentProcess',
      'binding': {
        'type': 'zeebe:calledElement',
        'property': 'processId'
      }
    },
    {
      'label': 'Payment ID',
      'type': 'String',
      'binding': {
        'type': 'zeebe:input',
        'name': 'paymentID'
      }
    },
    {
      'label': 'Amount',
      'type': 'String',
      'binding': {
        'type': 'zeebe:input',
        'name': 'amount'
      }
    },
    {
      'label': 'Outcome',
      'type': 'String',
      'description': 'Name of variable to store the result data in.',
      'value': 'paymentOutcome',
      'binding': {
        'type': 'zeebe:output',
        'source': '=outcome'
      }
    }
  ]
};

export const errors = [
  {
    keyword: 'required',
    dataPath: '',
    schemaPath: '#/allOf/1/allOf/2/then/anyOf/0/required',
    params: { missingProperty: 'elementType' },
    message: "should have required property 'elementType'"
  },
  {
    keyword: 'const',
    dataPath: '/appliesTo',
    schemaPath: '#/allOf/1/allOf/2/then/anyOf/1/properties/appliesTo/const',
    params: { allowedValue: [ 'bpmn:CallActivity' ] },
    message: 'should be equal to constant'
  },
  {
    keyword: 'anyOf',
    dataPath: '',
    schemaPath: '#/allOf/1/allOf/2/then/anyOf',
    params: {},
    message: 'should match some schema in anyOf'
  },
  {
    keyword: 'if',
    dataPath: '',
    schemaPath: '#/allOf/1/allOf/2/if',
    params: { failingKeyword: 'then' },
    message: 'should match "then" schema'
  },
  {
    keyword: 'type',
    dataPath: '',
    schemaPath: '#/oneOf/1/type',
    params: { type: 'array' },
    message: 'should be array'
  },
  {
    keyword: 'oneOf',
    dataPath: '',
    schemaPath: '#/oneOf',
    params: { passingSchemas: null },
    message: 'should match exactly one schema in oneOf'
  }
];
