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
        property: 'assignee'
      }
    }
  ]
};

export const errors = null;