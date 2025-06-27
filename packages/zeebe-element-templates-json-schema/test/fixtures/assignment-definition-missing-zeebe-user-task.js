export const template = {
  name: 'AssignmentDefinition',
  id: 'com.camunda.example.AssignmentDefinition',
  appliesTo: [
    'bpmn:Task'
  ],
  elementType: {
    value: 'bpmn:UserTask'
  },
  properties: [
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
      type: 'Hidden',
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

export const errors = [
  {
    keyword: 'errorMessage',
    dataPath: '/properties',
    schemaPath: '#/allOf/1/allOf/11/then/properties/properties/errorMessage',
    params: {
      errors: [
        {
          keyword: 'const',
          dataPath: '/properties/0/binding/type',
          schemaPath: '#/allOf/1/allOf/11/then/properties/properties/contains/properties/binding/properties/type/const',
          params: {
            allowedValue: 'zeebe:userTask'
          },
          message: 'should be equal to constant',
          emUsed: true
        },
        {
          keyword: 'const',
          dataPath: '/properties/1/binding/type',
          schemaPath: '#/allOf/1/allOf/11/then/properties/properties/contains/properties/binding/properties/type/const',
          params: {
            allowedValue: 'zeebe:userTask'
          },
          message: 'should be equal to constant',
          emUsed: true
        },
        {
          keyword: 'const',
          dataPath: '/properties/2/binding/type',
          schemaPath: '#/allOf/1/allOf/11/then/properties/properties/contains/properties/binding/properties/type/const',
          params: {
            allowedValue: 'zeebe:userTask'
          },
          message: 'should be equal to constant',
          emUsed: true
        },
        {
          keyword: 'contains',
          dataPath: '/properties',
          schemaPath: '#/allOf/1/allOf/11/then/properties/properties/contains',
          params: {
            minContains: 1
          },
          message: 'should contain at least 1 valid item(s)',
          emUsed: true
        }
      ]
    },
    message: 'When using "zeebe:assignmentDefinition", "zeebe:userTask" must be set on the same element'
  },
  {
    keyword: 'if',
    dataPath: '',
    schemaPath: '#/allOf/1/allOf/11/if',
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