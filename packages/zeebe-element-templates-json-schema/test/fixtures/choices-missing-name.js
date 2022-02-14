export const template = {
  'name': 'ChoicesMissingName',
  'id': 'com.camunda.example.ChoicesMissingName',
  'appliesTo': [
    'bpmn:Task'
  ],
  'properties': [
    {
      'label': 'random dropdown',
      'type': 'Dropdown',
      'choices': [
        { 'name': 'low', 'value': '20' },
        { 'value': '50' },
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
            missingProperty: 'name'
          },
          message: "should have required property 'name'"
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
