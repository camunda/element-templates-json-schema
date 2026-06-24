export const template = {
  'name': 'InvalidBindingType',
  'id': 'com.camunda.example.InvalidBindingType',
  'appliesTo': [
    'bpmn:Task'
  ],
  'properties': [
    {
      'label': 'Are you awesome?',
      'type': 'String',
      'binding': {
        'type': 'property',
        'name': 'foo'
      }
    },
    {
      'label': 'Are you awesome?',
      'type': 'String',
      'value': true,
      'binding': {
        'type': 'foo'
      }
    }
  ]
};

export const errors = [
  {
    keyword: 'errorMessage',
    dataPath: '/properties/1/binding/type',
    schemaPath: '#/definitions/properties/allOf/1/items/properties/binding/properties/type/errorMessage',
    params: {
      errors: [
        {
          keyword: 'enum',
          dataPath: '/properties/1/binding/type',
          schemaPath: '#/definitions/properties/allOf/1/items/properties/binding/properties/type/enum',
          params: {
            allowedValues: [
              'property',
              'camunda:property',
              'camunda:inputParameter',
              'camunda:outputParameter',
              'camunda:in',
              'camunda:out',
              'camunda:in:businessKey',
              'camunda:executionListener',
              'camunda:field',
              'camunda:errorEventDefinition'
            ]
          },
          message: 'should be equal to one of the allowed values',
          emUsed: true
        }
      ]
    },
    message: 'invalid property.binding type "foo"; must be any of { property, camunda:property, camunda:inputParameter, camunda:outputParameter, camunda:in, camunda:out, camunda:in:businessKey, camunda:executionListener, camunda:field, camunda:errorEventDefinition }'
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
