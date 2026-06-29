export const template = {
  'name': 'Invalid embedded configuration template',
  'id': 'io.camunda.example.InvalidEmbeddedTemplate',
  'appliesTo': [
    'bpmn:ServiceTask'
  ],
  'properties': [],
  'configurationTemplates': [
    {
      'name': 'Broken',
      'id': 'io.camunda:broken:1',
      'version': 1,
      'properties': []
    }
  ]
};

export const errors = [
  {
    keyword: 'required',
    dataPath: '/configurationTemplates/0',
    schemaPath: '#/properties/configurationTemplates/items/allOf/0/required',
    params: { missingProperty: 'kind' },
    message: "should have required property 'kind'"
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
