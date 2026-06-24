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
        'name': 'camunda:priority'
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
          dataPath: '/properties/0/choices/1',
          schemaPath: '#/definitions/properties/allOf/0/items/properties/choices/items/required',
          params: {
            missingProperty: 'name'
          },
          message: 'should have required property \'name\'',
          emUsed: true
        }
      ]
    },
    message: '{ name, value } must be specified for "Dropdown" choices'
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
