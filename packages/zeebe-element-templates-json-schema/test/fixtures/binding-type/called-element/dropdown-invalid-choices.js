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
  'properties':[
    {
      'label': 'Payment ID',
      'type': 'String',
      'binding': {
        'type': 'zeebe:input',
        'name': 'paymentID'
      }
    },
    {
      'type': 'Hidden',
      'value': 'paymentProcess',
      'binding': {
        'type': 'zeebe:calledElement',
        'property': 'processId'
      }
    },
    {
      'type': 'Dropdown',
      'label': 'Binding',
      'id': 'bindingType',
      'binding': {
        'type': 'zeebe:calledElement',
        'property': 'bindingType'
      },
      'choices': [
        {
          'name': 'Latest',
          'value': 'foo'
        },
        {
          'name': 'Deployment',
          'value': 'bar'
        },
        {
          'name': 'Version Tag',
          'value': 'baz'
        }
      ],
      'value': 'latest',
    },
    {
      'type': 'String',
      'label': 'Version tag',
      'binding': {
        'type': 'zeebe:calledElement',
        'property': 'versionTag'
      },
      'condition': {
        'property': 'bindingType',
        'equals': 'versionTag'
      }
    }
  ]
};

export const errors = [
  {
    keyword: 'enum',
    dataPath: '/properties/2/choices/0/value',
    schemaPath: '#/allOf/1/items/allOf/20/allOf/0/then/properties/choices/items/properties/value/enum',
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
    keyword: 'enum',
    dataPath: '/properties/2/choices/1/value',
    schemaPath: '#/allOf/1/items/allOf/20/allOf/0/then/properties/choices/items/properties/value/enum',
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
    keyword: 'enum',
    dataPath: '/properties/2/choices/2/value',
    schemaPath: '#/allOf/1/items/allOf/20/allOf/0/then/properties/choices/items/properties/value/enum',
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
    dataPath: '/properties/2',
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