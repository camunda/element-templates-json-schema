export const template = {
  'name': 'Mail Task',
  'id': 'com.camunda.example.MailTask',
  'appliesTo': ['bpmn:ServiceTask'],
  'properties': [
    {
      'label': 'Implementation Type',
      'type': 'Foo',
      'value': 'com.mycompany.MailTaskImpl',
      'editable': false,
      'binding': {
        'type': 'property',
        'name': 'camunda:class'
      }
    },
    {
      'label': 'Receivers',
      'type': 'Dropdown',
      'binding': {
        'type': 'camunda:inputParameter',
        'name': 'receivers'
      }
    },
    {
      'label': 'Result Status',
      'description': 'The process variable to which to assign the send result to',
      'type': 'String',
      'value': 'mailSendResult',
      'binding': {
        'type': 'camunda:outputParameter'
      }
    },
    {
      'label': 'Send Async?',
      'type': 'Boolean',
      'value': true,
      'binding': {
        'type': 'property'
      }
    }
  ]
};

export const errors = [
  {
    'keyword': 'errorMessage',
    'dataPath': '/properties/0/type',
    'schemaPath': '#/properties/properties/items/properties/type/errorMessage',
    'params': {
      'errors': [
        {
          'keyword': 'enum',
          'dataPath': '/properties/0/type',
          'schemaPath': '#/properties/properties/items/properties/type/enum',
          'params': {
            'allowedValues': [
              'Hidden',
              'String',
              'Boolean',
              'Dropdown',
              'Text'
            ]
          },
          'message': 'should be equal to one of the allowed values'
        }
      ]
    },
    'message': 'invalid property type "Foo"; must be any of { Hidden, String, Boolean, Dropdown, Text }'
  },
  {
    'keyword': 'errorMessage',
    'dataPath': '/properties/1',
    'schemaPath': '#/properties/properties/items/allOf/0/then/errorMessage',
    'params': {
      'errors': [
        {
          'keyword': 'required',
          'dataPath': '/properties/1',
          'schemaPath': '#/properties/properties/items/allOf/0/then/required',
          'params': {
            'missingProperty': 'choices'
          },
          'message': "should have required property 'choices'"
        }
      ]
    },
    'message': 'must provide choices=[] with "Dropdown" type'
  },
  {
    'keyword': 'if',
    'dataPath': '/properties/1',
    'schemaPath': '#/properties/properties/items/allOf/0/if',
    'params': {
      'failingKeyword': 'then'
    },
    'message': 'should match "then" schema'
  },
  {
    'keyword': 'errorMessage',
    'dataPath': '/properties/2/binding',
    'schemaPath': '#/properties/properties/items/properties/binding/allOf/1/then/errorMessage',
    'params': {
      'errors': [
        {
          'keyword': 'required',
          'dataPath': '/properties/2/binding',
          'schemaPath': '#/properties/properties/items/properties/binding/allOf/1/then/required',
          'params': {
            'missingProperty': 'source'
          },
          'message': "should have required property 'source'"
        }
      ]
    },
    'message': 'property.binding "camunda:outputParameter" requires source'
  },
  {
    'keyword': 'if',
    'dataPath': '/properties/2/binding',
    'schemaPath': '#/properties/properties/items/properties/binding/allOf/1/if',
    'params': {
      'failingKeyword': 'then'
    },
    'message': 'should match "then" schema'
  },
  {
    'keyword': 'errorMessage',
    'dataPath': '/properties/3/binding',
    'schemaPath': '#/properties/properties/items/properties/binding/allOf/0/then/errorMessage',
    'params': {
      'errors': [
        {
          'keyword': 'required',
          'dataPath': '/properties/3/binding',
          'schemaPath': '#/properties/properties/items/properties/binding/allOf/0/then/required',
          'params': {
            'missingProperty': 'name'
          },
          'message': "should have required property 'name'"
        }
      ]
    },
    'message': 'property.binding "property" requires name'
  },
  {
    'keyword': 'if',
    'dataPath': '/properties/3/binding',
    'schemaPath': '#/properties/properties/items/properties/binding/allOf/0/if',
    'params': {
      'failingKeyword': 'then'
    },
    'message': 'should match "then" schema'
  }
];
