export const template = [
  {
    'name': 'Activation condition',
    'id': 'com.camunda.example.activationCondition',
    'appliesTo': [
      'bpmn:ComplexGateway',
    ],
    'properties': [
      {
        'type': 'String',
        'feel': 'required',
        'binding': {
          'type': 'property',
          'name': 'activationCondition'
        }
      }
    ]
  },
  {
    'name': 'Completion condition',
    'id': 'com.camunda.example.completionCondition',
    'appliesTo': [
      'bpmn:AdHocSubProcess',
    ],
    'properties': [
      {
        'type': 'String',
        'feel': 'required',
        'binding': {
          'type': 'property',
          'name': 'completionCondition'
        }
      }
    ]
  },
  {
    'name': 'Condition expression',
    'id': 'com.camunda.example.conditionExpression',
    'appliesTo': [
      'bpmn:SequenceFlow',
    ],
    'properties': [
      {
        'type': 'String',
        'feel': 'required',
        'binding': {
          'type': 'property',
          'name': 'conditionExpression'
        }
      }
    ]
  }
];

export const errors = null;