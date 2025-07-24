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
      }
    }
  ]
};

export const errors = [
  {
    keyword: 'required',
    dataPath: '/properties/1/binding',
    schemaPath: '#/allOf/1/items/properties/binding/allOf/9/then/required',
    params: {
      missingProperty: 'property'
    },
    message: "should have required property 'property'"
  },
  {
    keyword: 'if',
    dataPath: '/properties/1/binding',
    schemaPath: '#/allOf/1/items/properties/binding/allOf/9/if',
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