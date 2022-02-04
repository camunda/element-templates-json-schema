export const template = {
  'name': 'Grouping',
  'id': 'example.com.missingGroupId',
  'appliesTo': [
    'bpmn:ServiceTask'
  ],
  'properties': [],
  'groups': [
    {
      'id': 'one'
    }
  ]
};

export const errors = [
  {
    keyword: 'errorMessage',
    dataPath: '/groups/0',
    schemaPath: '#/allOf/0/properties/groups/items/errorMessage',
    params: {
      errors: [
        {
          keyword: 'required',
          dataPath: '/groups/0',
          schemaPath: '#/allOf/0/properties/groups/items/required',
          params: { missingProperty: 'label' },
          message: "should have required property 'label'",
          emUsed: true
        }
      ]
    },
    message: 'missing label for group "0"'
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