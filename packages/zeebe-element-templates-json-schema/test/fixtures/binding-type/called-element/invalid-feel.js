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
      'value': 'deployment',
      'choices': [
        {
          'value': 'deployment',
          'name': 'Deployment'
        },
        {
          'value': 'versionTag',
          'name': 'Version Tag'
        } ],
      'feel': 'static',
      'binding': {
        'type': 'zeebe:calledElement',
        'property': 'bindingType'
      }
    },
    {
      'type': 'Hidden',
      'value': 'deployment',
      'feel': 'required',
      'binding': {
        'type': 'zeebe:calledElement',
        'property': 'bindingType'
      }
    }
  ]
};

// This just catching a transitive error as Hidden and Dropdown cannot be feel anyways.
export const errors = [
  {
    keyword: 'errorMessage',
    dataPath: '/properties/2/type',
    schemaPath: '#/allOf/1/items/allOf/4/then/properties/type/errorMessage',
    params: {
      errors: [
        {
          keyword: 'enum',
          dataPath: '/properties/2/type',
          schemaPath: '#/allOf/1/items/allOf/4/then/properties/type/enum',
          params: {
            allowedValues: [
              'String',
              'Text',
              'Number',
              'Boolean'
            ]
          },
          message: 'should be equal to one of the allowed values',
          emUsed: true
        }
      ]
    },
    message: 'feel is only supported for "String", "Text", "Number" and "Boolean" type'
  },
  {
    keyword: 'if',
    dataPath: '/properties/2',
    schemaPath: '#/allOf/1/items/allOf/4/if',
    params: {
      failingKeyword: 'then'
    },
    message: 'should match "then" schema'
  },
  {
    keyword: 'errorMessage',
    dataPath: '/properties/3/type',
    schemaPath: '#/allOf/1/items/allOf/4/then/properties/type/errorMessage',
    params: {
      errors: [
        {
          keyword: 'enum',
          dataPath: '/properties/3/type',
          schemaPath: '#/allOf/1/items/allOf/4/then/properties/type/enum',
          params: {
            allowedValues: [
              'String',
              'Text',
              'Number',
              'Boolean'
            ]
          },
          message: 'should be equal to one of the allowed values',
          emUsed: true
        }
      ]
    },
    message: 'feel is only supported for "String", "Text", "Number" and "Boolean" type'
  },
  {
    keyword: 'if',
    dataPath: '/properties/3',
    schemaPath: '#/allOf/1/items/allOf/4/if',
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
