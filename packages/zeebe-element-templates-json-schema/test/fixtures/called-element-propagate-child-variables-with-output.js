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
      'label': 'Propagate All Child Variables',
      'type': 'Hidden',
      'value': true,
      'binding': {
        'type': 'zeebe:calledElement',
        'property': 'propagateAllChildVariables'
      }
    },
    {
      'label': 'Outcome',
      'type': 'String',
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
    keyword: 'errorMessage',
    dataPath: '/properties',
    schemaPath: '#/allOf/1/allOf/12/then/properties/properties/errorMessage',
    params: {
      errors: [
        {
          keyword: 'not',
          dataPath: '/properties',
          schemaPath: '#/allOf/1/allOf/12/then/properties/properties/not',
          params: {},
          message: 'should NOT be valid',
          emUsed: true
        }
      ]
    },
    message: 'Binding with `type`=`zeebe:output` cannot be used when `propagateAllChildVariables` is set to `true`'
  },
  {
    keyword: 'if',
    dataPath: '',
    schemaPath: '#/allOf/1/allOf/12/if',
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
