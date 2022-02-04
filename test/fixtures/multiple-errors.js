export const template = {
  'name': 'Mail Task',
  'id': 'com.camunda.example.MailTask',
  'appliesTo': [ 'bpmn:ServiceTask' ],
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
    keyword: 'errorMessage',
    dataPath: '/properties/1',
    schemaPath: '#/definitions/properties/allOf/0/items/allOf/0/then/errorMessage',
    params: {
      errors: [
        {
          keyword: 'required',
          dataPath: '/properties/1',
          schemaPath: '#/definitions/properties/allOf/0/items/allOf/0/then/required',
          params: { missingProperty: 'choices' },
          message: "should have required property 'choices'",
          emUsed: true
        }
      ]
    },
    message: 'must provide choices=[] with "Dropdown" type'
  },
  {
    keyword: 'if',
    dataPath: '/properties/1',
    schemaPath: '#/definitions/properties/allOf/0/items/allOf/0/if',
    params: { failingKeyword: 'then' },
    message: 'should match "then" schema'
  },
  {
    keyword: 'errorMessage',
    dataPath: '/properties/0/type',
    schemaPath: '#/definitions/properties/allOf/1/items/allOf/0/then/properties/type/errorMessage',
    params: {
      errors: [
        {
          keyword: 'enum',
          dataPath: '/properties/0/type',
          schemaPath: '#/definitions/properties/allOf/1/items/allOf/0/then/properties/type/enum',
          params: {
            allowedValues: [ 'String', 'Text', 'Hidden', 'Dropdown', 'Boolean' ]
          },
          message: 'should be equal to one of the allowed values',
          emUsed: true
        }
      ]
    },
    message: 'invalid property type "Foo" for binding type "property"; must be any of { String, Text, Hidden, Dropdown, Boolean }'
  },
  {
    keyword: 'if',
    dataPath: '/properties/0',
    schemaPath: '#/definitions/properties/allOf/1/items/allOf/0/if',
    params: { failingKeyword: 'then' },
    message: 'should match "then" schema'
  },
  {
    keyword: 'errorMessage',
    dataPath: '/properties/2/binding',
    schemaPath: '#/definitions/properties/allOf/1/items/properties/binding/allOf/1/then/errorMessage',
    params: {
      errors: [
        {
          keyword: 'required',
          dataPath: '/properties/2/binding',
          schemaPath: '#/definitions/properties/allOf/1/items/properties/binding/allOf/1/then/required',
          params: { missingProperty: 'source' },
          message: "should have required property 'source'",
          emUsed: true
        }
      ]
    },
    message: 'property.binding "camunda:outputParameter" requires source'
  },
  {
    keyword: 'if',
    dataPath: '/properties/2/binding',
    schemaPath: '#/definitions/properties/allOf/1/items/properties/binding/allOf/1/if',
    params: { failingKeyword: 'then' },
    message: 'should match "then" schema'
  },
  {
    keyword: 'errorMessage',
    dataPath: '/properties/3/binding',
    schemaPath: '#/definitions/properties/allOf/1/items/properties/binding/allOf/0/then/errorMessage',
    params: {
      errors: [
        {
          keyword: 'required',
          dataPath: '/properties/3/binding',
          schemaPath: '#/definitions/properties/allOf/1/items/properties/binding/allOf/0/then/required',
          params: { missingProperty: 'name' },
          message: "should have required property 'name'",
          emUsed: true
        }
      ]
    },
    message: 'property.binding "property" requires name'
  },
  {
    keyword: 'if',
    dataPath: '/properties/3/binding',
    schemaPath: '#/definitions/properties/allOf/1/items/properties/binding/allOf/0/if',
    params: { failingKeyword: 'then' },
    message: 'should match "then" schema'
  },
  {
    keyword: 'type',
    dataPath: '',
    schemaPath: '#/oneOf/1/type',
    params: { type: 'array' },
    message: 'should be array'
  },
  {
    keyword: 'oneOf',
    dataPath: '',
    schemaPath: '#/oneOf',
    params: { passingSchemas: null },
    message: 'should match exactly one schema in oneOf'
  }
];
