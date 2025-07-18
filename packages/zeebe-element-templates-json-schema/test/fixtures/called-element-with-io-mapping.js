export const template = {
  '$schema': 'https://unpkg.com/@camunda/zeebe-element-templates-json-schema/resources/schema.json',
  'id': 'io.camunda.examples.Payment',
  'name': 'Payment',
  'description': 'Payment process call activity',
  'appliesTo': [
    'bpmn:Task'
  ],
  'elementType': {
    'value': 'bpmn:CallActivity'
  },
  'properties':[
    {
      'type': 'Hidden',
      'value': 'paymentProcess',
      'binding': {
        'type': 'zeebe:calledElement',
        'property': 'processId'
      }
    },
    {
      'label': 'Payment ID',
      'type': 'String',
      'binding': {
        'type': 'zeebe:input',
        'name': 'paymentID'
      }
    },
    {
      'label': 'Amount',
      'type': 'String',
      'binding': {
        'type': 'zeebe:input',
        'name': 'amount'
      }
    },
    {
      'label': 'Outcome',
      'type': 'String',
      'description': 'Name of variable to store the result data in.',
      'value': 'paymentOutcome',
      'binding': {
        'type': 'zeebe:output',
        'source': '=outcome'
      }
    }
  ]
};

export const errors = null;
