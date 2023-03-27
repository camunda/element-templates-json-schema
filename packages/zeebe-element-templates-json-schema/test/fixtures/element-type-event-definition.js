export const template = {
  'name': 'Pattern Template',
  'id': 'com.example.BindingTemplate',
  'appliesTo': [
    'bpmn:IntermediateCatchEvent',
    'bpmn:IntermediateThrowEvent',
  ],
  'elementType': {
    'value': 'bpmn:IntermediateCatchEvent',
    'eventDefinition': 'bpmn:MessageEventDefinition'
  },
  'properties': []
};

export const errors = null;