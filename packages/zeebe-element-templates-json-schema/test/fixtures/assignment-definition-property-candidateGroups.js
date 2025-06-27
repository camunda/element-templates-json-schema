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
      type: 'Dropdown',
      value: 'group1',
      label: 'Candidate Groups',
      description: 'Groups that can claim the user task',
      choices: [
        {
          value: 'group1',
          name: 'Group 1'
        },
        {
          value: 'group2',
          name: 'Group 2'
        }
      ],
      binding:{
        type: 'zeebe:assignmentDefinition',
        property:'candidateGroups'
      }
    }
  ]
}
;

export const errors = [];