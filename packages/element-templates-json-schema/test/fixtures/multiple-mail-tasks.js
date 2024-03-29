export const template = [
  {
    'name': 'Mail Task 1',
    'id': 'com.camunda.example.MailTaskOne',
    'appliesTo': [
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
    'appliesTo': [
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
  } ];

export const errors = null;
