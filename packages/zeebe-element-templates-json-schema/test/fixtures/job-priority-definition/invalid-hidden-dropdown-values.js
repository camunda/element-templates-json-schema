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
      value: 'not-a-priority',
      type: 'Hidden',
      binding: {
        type: 'zeebe:jobPriorityDefinition',
        property: 'priority'
      }
    },
    {
      label: 'Prio',
      value: '50',
      type: 'Dropdown',
      binding: {
        type: 'zeebe:jobPriorityDefinition',
        property: 'priority'
      },
      choices: [
        {
          name: 'Invalid',
          value: '3.5'
        }
      ]
    }
  ]
};

export const errors = [
  {
    keyword: 'pattern',
    dataPath: '/properties/1/value',
    schemaPath: '#/allOf/1/items/allOf/33/allOf/2/then/properties/value/pattern',
    params: {
      pattern: '^(=.*|-?[0-9]+)$'
    },
    message: 'should match pattern "^(=.*|-?[0-9]+)$"'
  },
  {
    keyword: 'if',
    dataPath: '/properties/1',
    schemaPath: '#/allOf/1/items/allOf/33/allOf/2/if',
    params: {
      failingKeyword: 'then'
    },
    message: 'should match "then" schema'
  },
  {
    keyword: 'pattern',
    dataPath: '/properties/2/choices/0/value',
    schemaPath: '#/allOf/1/items/allOf/33/allOf/2/then/properties/choices/items/properties/value/pattern',
    params: {
      pattern: '^(=.*|-?[0-9]+)$'
    },
    message: 'should match pattern "^(=.*|-?[0-9]+)$"'
  },
  {
    keyword: 'if',
    dataPath: '/properties/2',
    schemaPath: '#/allOf/1/items/allOf/33/allOf/2/if',
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
