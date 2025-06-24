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
  'properties':[
    {
      'type': 'Hidden',
      'value': 'paymentProcess',
      'binding': {
        'type': 'zeebe:calledElement'
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
    dataPath: '/properties/0/binding',
    schemaPath: '#/allOf/1/allOf/9/then/properties/properties/contains/properties/binding/required',
    params: {
      missingProperty: 'property'
    },
    message: "should have required property 'property'"
  },
  {
    keyword: 'required',
    dataPath: '/properties/1/binding',
    schemaPath: '#/allOf/1/allOf/9/then/properties/properties/contains/properties/binding/required',
    params: {
      missingProperty: 'property'
    },
    message: "should have required property 'property'"
  },
  {
    keyword: 'const',
    dataPath: '/properties/1/binding/type',
    schemaPath: '#/allOf/1/allOf/9/then/properties/properties/contains/properties/binding/properties/type/const',
    params: {
      allowedValue: 'zeebe:calledElement'
    },
    message: 'should be equal to constant'
  },
  {
    keyword: 'required',
    dataPath: '/properties/2/binding',
    schemaPath: '#/allOf/1/allOf/9/then/properties/properties/contains/properties/binding/required',
    params: {
      missingProperty: 'property'
    },
    message: "should have required property 'property'"
  },
  {
    keyword: 'const',
    dataPath: '/properties/2/binding/type',
    schemaPath: '#/allOf/1/allOf/9/then/properties/properties/contains/properties/binding/properties/type/const',
    params: {
      allowedValue: 'zeebe:calledElement'
    },
    message: 'should be equal to constant'
  },
  {
    keyword: 'required',
    dataPath: '/properties/3/binding',
    schemaPath: '#/allOf/1/allOf/9/then/properties/properties/contains/properties/binding/required',
    params: {
      missingProperty: 'property'
    },
    message: "should have required property 'property'"
  },
  {
    keyword: 'const',
    dataPath: '/properties/3/binding/type',
    schemaPath: '#/allOf/1/allOf/9/then/properties/properties/contains/properties/binding/properties/type/const',
    params: {
      allowedValue: 'zeebe:calledElement'
    },
    message: 'should be equal to constant'
  },
  {
    keyword: 'contains',
    dataPath: '/properties',
    schemaPath: '#/allOf/1/allOf/9/then/properties/properties/contains',
    params: {
      minContains: 1
    },
    message: 'should contain at least 1 valid item(s)'
  },
  {
    keyword: 'if',
    dataPath: '',
    schemaPath: '#/allOf/1/allOf/9/if',
    params: {
      failingKeyword: 'then'
    },
    message: 'should match "then" schema'
  },
  {
    keyword: 'required',
    dataPath: '/properties/0/binding',
    schemaPath: '#/allOf/1/items/properties/binding/allOf/5/then/required',
    params: {
      missingProperty: 'property'
    },
    message: "should have required property 'property'"
  },
  {
    keyword: 'if',
    dataPath: '/properties/0/binding',
    schemaPath: '#/allOf/1/items/properties/binding/allOf/5/if',
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
