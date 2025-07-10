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
      feel: 'optional',
      binding: {
        type: 'zeebe:assignmentDefinition',
        property: 'assignee'
      }
    },
    {
      type: 'String',
      feel: 'optional',
      binding: {
        type: 'zeebe:assignmentDefinition',
        property: 'candidateUsers'
      }
    },
    {
      type: 'String',
      feel: 'required',
      value: 'someDefaultGroup',
      binding: {
        type: 'zeebe:assignmentDefinition',
        property: 'candidateGroups'
      }
    }
  ]
};

export const errors = null;