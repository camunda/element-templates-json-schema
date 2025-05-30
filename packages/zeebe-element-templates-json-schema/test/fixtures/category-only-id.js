export const template = {
  name: 'Category',
  id: 'example.com.category',
  appliesTo: [
    'bpmn:Task'
  ],
  properties: [],
  category: {
    id: 'my-task'
  }
};

export const errors = [
  {
    'keyword': 'required',
    'dataPath': '/category',
    'schemaPath': '#/properties/category/required',
    'params': {
      'missingProperty': 'name'
    },
    'message': "should have required property 'name'"
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