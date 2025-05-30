export const template = {
  name: 'Category',
  id: 'example.com.category',
  appliesTo: [
    'bpmn:Task'
  ],
  properties: [],
  category: {
    name:  'My task'
  }
};

export const errors = [
  {
    'keyword': 'required',
    'dataPath': '/category',
    'schemaPath': '#/properties/category/required',
    'params': {
      'missingProperty': 'id'
    },
    'message': "should have required property 'id'"
  },
  {
    'keyword': 'type',
    'dataPath': '',
    'schemaPath': '#/oneOf/1/type',
    'params': {
      'type': 'array'
    },
    'message': 'should be array'
  },
  {
    'keyword': 'oneOf',
    'dataPath': '',
    'schemaPath': '#/oneOf',
    'params': {
      'passingSchemas': null
    },
    'message': 'should match exactly one schema in oneOf'
  }
];