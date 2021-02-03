export const template = [
  {
    'name': 'Mail Task 1',
    'id': 'com.camunda.example.MailTaskOne',
    'someWrongProperty': [
      'bpmn:ServiceTask'
    ],
    'properties': [
      {
        'label': 'Implementation Type',
        'type': 'String',
        'value': 'com.mycompany.MailTaskImpl',
        'editable': false,
        'binding': {
          'type': 'property',
          'name': 'camunda:class'
        }
      },
      {
        'label': 'Sender',
        'type': 'String',
        'binding': {
          'type': 'camunda:inputParameter',
          'name': 'sender'
        },
        'constraints': {
          'notEmpty': true
        }
      },
      {
        'label': 'Receivers',
        'type': 'String',
        'binding': {
          'type': 'camunda:inputParameter',
          'name': 'receivers'
        },
        'constraints': {
          'notEmpty': true
        }
      },
      {
        'label': 'Template',
        'description': 'By the way, you can use freemarker templates ${...} here',
        'value': 'Hello ${firstName}!',
        'type': 'Text',
        'binding': {
          'type': 'camunda:inputParameter',
          'name': 'messageBody',
          'scriptFormat': 'freemarker'
        },
        'constraints': {
          'notEmpty': true
        }
      },
      {
        'label': 'Result Status',
        'description': 'The process variable to which to assign the send result to',
        'type': 'String',
        'value': 'mailSendResult',
        'binding': {
          'type': 'camunda:outputParameter',
          'source': '${ resultStatus }'
        }
      },
      {
        'label': 'Async before?',
        'type': 'Boolean',
        'binding': {
          'type': 'property',
          'name': 'camunda:asyncBefore'
        }
      }
    ]
  },
  {
    'name': 'Mail Task 2',
    'id': 'com.camunda.example.MailTaskTwo',
    'properties': [
      {
        'label': 'Implementation Type',
        'type': 'String',
        'value': 'com.mycompany.MailTaskImpl',
        'editable': false,
        'binding': {
          'type': 'property',
          'name': 'camunda:class'
        }
      },
      {
        'label': 'Sender',
        'type': 'String',
        'binding': {
          'type': 'camunda:inputParameter',
          'name': 'sender'
        },
        'constraints': {
          'notEmpty': true
        }
      },
      {
        'label': 'Receivers',
        'type': 'String',
        'binding': {
          'type': 'camunda:inputParameter',
          'name': 'receivers'
        },
        'constraints': {
          'notEmpty': true
        }
      },
      {
        'label': 'Template',
        'description': 'By the way, you can use freemarker templates ${...} here',
        'value': 'Hello ${firstName}!',
        'type': 'Text',
        'binding': {
          'type': 'camunda:inputParameter',
          'name': 'messageBody',
          'scriptFormat': 'freemarker'
        },
        'constraints': {
          'notEmpty': true
        }
      },
      {
        'label': 'Result Status',
        'description': 'The process variable to which to assign the send result to',
        'type': 'String',
        'value': 'mailSendResult',
        'binding': {
          'type': 'camunda:outputParameter',
          'source': '${ resultStatus }'
        }
      },
      {
        'label': 'Async before?',
        'type': 'Boolean',
        'binding': {
          'type': 'property',
          'name': 'camunda:asyncBefore'
        }
      }
    ]
  }
];

export const errors = [
  {
    keyword: 'type',
    dataPath: '',
    schemaPath: '#/type',
    params: { type: 'object' },
    message: 'should be object'
  },
  {
    keyword: 'required',
    dataPath: '/0',
    schemaPath: '#/required',
    params: { missingProperty: 'appliesTo' },
    message: "should have required property 'appliesTo'"
  },
  {
    keyword: 'required',
    dataPath: '/1',
    schemaPath: '#/required',
    params: { missingProperty: 'appliesTo' },
    message: "should have required property 'appliesTo'"
  },
  {
    keyword: 'oneOf',
    dataPath: '',
    schemaPath: '#/oneOf',
    params: { passingSchemas: null },
    message: 'should match exactly one schema in oneOf'
  }
];
