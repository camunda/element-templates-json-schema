export const template = {
  'name': 'Custom Whatever',
  'id': 'com.mycompany.whateverdomain.ShoeTask',
  'appliesTo': [
    'bpmn:ServiceTask'
  ],
  'properties': [
    {
      'label': 'Schuhgröße',
      'type': 'String',
      'value': '45',
      'binding': {
        'type': 'property',
        'name': 'shoeSize'
      },
      'constraints': {
        'mandatory': true,
        'minLength': '100',
        'maxLength': '200',
        'pattern': {
          'message': 'Must be valid shoe size (>20 && <49)',
          'match': '/[2-4][0-9]/'
        }
      }
    }
  ]
};

export const errors = [
  {
    keyword: 'type',
    dataPath: '/properties/0/constraints/minLength',
    schemaPath: '#/definitions/properties/allOf/0/items/properties/constraints/properties/minLength/type',
    params: { type: 'number' },
    message: 'should be number'
  },
  {
    keyword: 'type',
    dataPath: '/properties/0/constraints/maxLength',
    schemaPath: '#/definitions/properties/allOf/0/items/properties/constraints/properties/maxLength/type',
    params: { type: 'number' },
    message: 'should be number'
  },
  {
    keyword: 'type',
    dataPath: '',
    schemaPath: '#/oneOf/1/type',
    params: { type: 'array' },
    message: 'should be array'
  },
  {
    keyword: 'oneOf',
    dataPath: '',
    schemaPath: '#/oneOf',
    params: { passingSchemas: null },
    message: 'should match exactly one schema in oneOf'
  }
];