export const template = {
  'name': 'ChoicesMissingValue',
  'id': 'com.camunda.example.ChoicesMissingValue',
  'appliesTo': [
    'bpmn:Task'
  ],
  'properties': [
    {
      'label': 'random dropdown',
      'type': 'Dropdown',
      'choices': [
        { 'name': 'low', 'value': '20' },
        { 'name': 'medium' },
        { 'name': 'height', 'value': '100' }
      ],
      'binding': {
        'type': 'property',
        'name': 'name'
      }
    }
  ]
};

export const errors = [
  {
    keyword: 'errorMessage',
    dataPath: '/properties/0/choices/1',
    schemaPath: '#/definitions/properties/allOf/0/items/properties/choices/items/errorMessage',
    params: {
      errors: [
        {
          keyword: 'required',
          emUsed: true,
          dataPath: '/properties/0/choices/1',
          schemaPath: '#/definitions/properties/allOf/0/items/properties/choices/items/required',
          params: {
            missingProperty: 'value'
          },
          message: "should have required property 'value'"
        }
      ]
    },
    message: '{ name, value } must be specified for "Dropdown" choices'
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
