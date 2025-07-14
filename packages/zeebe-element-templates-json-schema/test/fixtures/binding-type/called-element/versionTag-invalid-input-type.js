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
      'type': 'Hidden',
      'value': 'versionTag',
      'binding': {
        'type': 'zeebe:calledElement',
        'property': 'bindingType'
      }
    },
    {
      'type': 'Number',
      'value': 1,
      'binding': {
        'type': 'zeebe:calledElement',
        'property': 'versionTag'
      }
    },
    {
      'type': 'Boolean',
      'value': true,
      'binding': {
        'type': 'zeebe:calledElement',
        'property': 'versionTag'
      }
    }
  ]
};

export const errors = [
  {
    keyword: 'errorMessage',
    dataPath: '/properties/3/type',
    schemaPath: '#/allOf/1/items/allOf/20/allOf/1/then/allOf/0/properties/type/errorMessage',
    params: {
      errors: [
        {
          keyword: 'enum',
          dataPath: '/properties/3/type',
          schemaPath: '#/allOf/1/items/allOf/20/allOf/1/then/allOf/0/properties/type/enum',
          params: {
            allowedValues: [
              'Hidden',
              'Dropdown',
              'String',
              'Text'
            ]
          },
          message: 'should be equal to one of the allowed values',
          emUsed: true
        }
      ]
    },
    message: 'Incorrect type "Number". Must be one of { String, Text, Hidden, Dropdown } for binding with `property`=`versionTag`'
  },
  {
    keyword: 'if',
    dataPath: '/properties/3',
    schemaPath: '#/allOf/1/items/allOf/20/allOf/1/if',
    params: {
      failingKeyword: 'then'
    },
    message: 'should match "then" schema'
  },
  {
    keyword: 'errorMessage',
    dataPath: '/properties/4/type',
    schemaPath: '#/allOf/1/items/allOf/20/allOf/1/then/allOf/0/properties/type/errorMessage',
    params: {
      errors: [
        {
          keyword: 'enum',
          dataPath: '/properties/4/type',
          schemaPath: '#/allOf/1/items/allOf/20/allOf/1/then/allOf/0/properties/type/enum',
          params: {
            allowedValues: [
              'Hidden',
              'Dropdown',
              'String',
              'Text'
            ]
          },
          message: 'should be equal to one of the allowed values',
          emUsed: true
        }
      ]
    },
    message: 'Incorrect type "Boolean". Must be one of { String, Text, Hidden, Dropdown } for binding with `property`=`versionTag`'
  },
  {
    keyword: 'if',
    dataPath: '/properties/4',
    schemaPath: '#/allOf/1/items/allOf/20/allOf/1/if',
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
]
;