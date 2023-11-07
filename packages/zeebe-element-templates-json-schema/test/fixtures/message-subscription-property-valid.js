export const template = [
  {
    'name': 'ValidTemplateEvent',
    'id': 'com.camunda.example.ValidTemplateEvent',
    'appliesTo': [
      'bpmn:IntermediateCatchEvent'
    ],
    'elementType': {
      value: 'bpmn:IntermediateCatchEvent',
      eventDefinition: 'bpmn:MessageEventDefinition'
    },
    'properties': [
      {
        'label': 'foo',
        'type': 'String',
        'binding': {
          'type': 'bpmn:Message#zeebe:subscription#property',
          'name': 'correlationKey'
        }
      }
    ]
  },
  {
    'name': 'ValidTemplateReceiveTask',
    'id': 'com.camunda.example.ValidTemplateReceiveTask',
    'appliesTo': [
      'bpmn:Task'
    ],
    'elementType': {
      value: 'bpmn:ReceiveTask'
    },
    'properties': [
      {
        'label': 'foo',
        'type': 'String',
        'binding': {
          'type': 'bpmn:Message#zeebe:subscription#property',
          'name': 'correlationKey'
        }
      }
    ]
  }
];

export const errors = null;
