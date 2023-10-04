export const template = {
  'name': 'Grouping',
  'id': 'example.com.missingGroupId',
  'appliesTo': [
    'bpmn:ServiceTask'
  ],
  'properties': [],
  'groups': [
    {
      'id': 'one',
      'label': 'Group one',
      'openByDefault': 'true'
    }
  ]
};

export const errors = [
  {
    'dataPath': '/groups/0/openByDefault',
    'keyword': 'type',
    'message': 'should be boolean',
    'params': {
      'type': 'boolean'
    },
    'schemaPath': '#/properties/groups/items/properties/openByDefault/type'
  },
  {
    'dataPath': '',
    'keyword': 'type',
    'message': 'should be array',
    'params': {
      'type': 'array'
    },
    'schemaPath': '#/oneOf/1/type'
  },
  {
    'dataPath': '',
    'keyword': 'oneOf',
    'message': 'should match exactly one schema in oneOf',
    'params': {
      'passingSchemas': null
    },
    'schemaPath': '#/oneOf'
  }
];