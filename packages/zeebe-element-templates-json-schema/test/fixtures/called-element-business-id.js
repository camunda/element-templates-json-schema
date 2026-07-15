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
  'properties': [
    {
      'type': 'Hidden',
      'value': 'paymentProcess',
      'binding': {
        'type': 'zeebe:calledElement',
        'property': 'processId'
      }
    },
    {
      'label': 'Business ID',
      'type': 'String',
      'feel': 'optional',
      'value': '=order.customerId',
      'binding': {
        'type': 'zeebe:calledElement',
        'property': 'businessId'
      }
    }
  ]
};

export const errors = null;
