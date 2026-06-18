export const template = {
  name: 'Job Priority Definition',
  id: 'job-priority-definition',
  description: 'A template to define job priority.',
  version: 1,
  appliesTo: [
    'bpmn:Task'
  ],
  elementType: {
    value: 'bpmn:ServiceTask'
  },
  properties: [
    {
      type: 'Hidden',
      value: 'my-job-worker',
      binding: {
        type: 'zeebe:taskDefinition',
        property: 'type'
      }
    },
    {
      label: 'Prio',
      value: 50.5,
      type: 'Number',
      binding: {
        type: 'zeebe:jobPriorityDefinition',
        property: 'priority'
      }
    }
  ]
};

export const errors = [
  {
    keyword: 'type',
    dataPath: '/properties/1/value',
    schemaPath: '#/allOf/1/items/allOf/33/allOf/1/then/properties/value/anyOf/0/type',
    params: {
      type: 'integer'
    },
    message: 'should be integer'
  },
  {
    keyword: 'type',
    dataPath: '/properties/1/value',
    schemaPath: '#/allOf/1/items/allOf/33/allOf/1/then/properties/value/anyOf/1/type',
    params: {
      type: 'string'
    },
    message: 'should be string'
  },
  {
    keyword: 'anyOf',
    dataPath: '/properties/1/value',
    schemaPath: '#/allOf/1/items/allOf/33/allOf/1/then/properties/value/anyOf',
    params: {},
    message: 'should match some schema in anyOf'
  },
  {
    keyword: 'if',
    dataPath: '/properties/1',
    schemaPath: '#/allOf/1/items/allOf/33/allOf/1/if',
    params: {
      failingKeyword: 'then'
    },
    message: 'should match "then" schema'
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
