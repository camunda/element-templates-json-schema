export const template = {
  name: 'Category',
  id: 'example.com.category',
  appliesTo: [
    'bpmn:Task'
  ],
  properties: [],
  category: {
    id: 'the id of my task',
    name:  'My task'
  }
};

export const errors = [
  {
    'keyword': 'pattern',
    'dataPath': '/category/id',
    'schemaPath': '#/properties/category/properties/id/pattern',
    'params': {
      'pattern': '(\\w+)-(\\w)([\\w-]*)'
    },
    'message': 'should match pattern "(\\w+)-(\\w)([\\w-]*)"'
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