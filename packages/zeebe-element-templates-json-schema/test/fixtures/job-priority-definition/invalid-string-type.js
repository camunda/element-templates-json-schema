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
      value: '= 1',
      description: 'Prio for job',
      type: 'String',
      feel: 'required',
      binding: {
        type: 'zeebe:jobPriorityDefinition',
        property: 'priority'
      }
    }
  ]
};

export const errors = [
  {
    keyword: 'enum',
    dataPath: '/properties/1/type',
    schemaPath: '#/allOf/1/items/allOf/33/allOf/0/then/properties/type/enum',
    params: {
      allowedValues: [
        'Hidden',
        'Number',
        'Dropdown'
      ]
    },
    message: 'should be equal to one of the allowed values'
  },
  {
    keyword: 'if',
    dataPath: '/properties/1',
    schemaPath: '#/allOf/1/items/allOf/33/allOf/0/if',
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
