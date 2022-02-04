export const template = {
  'name': 'MissingChoices',
  'id': 'com.camunda.example.MissingChoices',
  'appliesTo': [
    'bpmn:Task'
  ],
  'properties': [
    {
      'label': 'Are you awesome?',
      'type': 'Dropdown',
      'value': true,
      'binding': {
        'type': 'property',
        'name': 'foo'
      }
    }
  ]
};

export const errors = [
  {
    keyword: 'errorMessage',
    dataPath: '/properties/0',
    schemaPath: '#/definitions/properties/allOf/0/items/allOf/0/then/errorMessage',
    params: {
      errors: [
        {
          keyword: 'required',
          emUsed: true,
          dataPath: '/properties/0',
          schemaPath: '#/definitions/properties/allOf/0/items/allOf/0/then/required',
          params: {
            missingProperty: 'choices'
          },
          message: "should have required property 'choices'"
        }
      ]
    },
    message: 'must provide choices=[] with "Dropdown" type'
  },
  {
    keyword: 'if',
    dataPath: '/properties/0',
    schemaPath: '#/definitions/properties/allOf/0/items/allOf/0/if',
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
