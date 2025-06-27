export const template = {
  name: 'AssignmentDefinition',
  id: 'com.camunda.example.AssignmentDefinition',
  appliesTo: [
    'bpmn:Task'
  ],
  elementType: {
    value: 'bpmn:ServiceTask'
  },
  properties: [
    {
      type: 'Hidden',
      binding: {
        type: 'zeebe:userTask',
      }
    },
    {
      label: 'Assignee',
      description: 'Assignee for user task',
      type: 'String',
      binding: {
        type: 'zeebe:assignmentDefinition',
        property: 'assignee'
      }
    },
    {
      type: 'Text',
      binding: {
        type: 'zeebe:assignmentDefinition',
        property: 'candidateUsers'
      }
    },
    {
      type: 'Hidden',
      value: 'someDefaultGroup',
      binding: {
        type: 'zeebe:assignmentDefinition',
        property: 'candidateGroups'
      }
    }
  ]
};

// this is covered transitively by zeebe:userTask being a requirement for the assignmentDefinition binding
export const errors = [
  {
    keyword: 'const',
    dataPath: '/elementType/value',
    schemaPath: '#/allOf/1/allOf/3/then/properties/elementType/properties/value/const',
    params: {
      allowedValue: 'bpmn:UserTask'
    },
    message: 'should be equal to constant'
  },
  {
    keyword: 'if',
    dataPath: '',
    schemaPath: '#/allOf/1/allOf/3/if',
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