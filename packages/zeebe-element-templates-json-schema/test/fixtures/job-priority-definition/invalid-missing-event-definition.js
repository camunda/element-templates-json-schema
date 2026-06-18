export const template = {
  name: 'Job Priority Definition',
  id: 'job-priority-definition-missing-event-definition',
  version: 1,
  appliesTo: [
    'bpmn:IntermediateThrowEvent'
  ],
  elementType: {
    value: 'bpmn:IntermediateThrowEvent'
  },
  properties: [
    {
      value: '50',
      type: 'Hidden',
      binding: {
        type: 'zeebe:jobPriorityDefinition',
        property: 'priority'
      }
    }
  ]
};

export const errors = [
  {
    keyword: 'required',
    dataPath: '/elementType',
    schemaPath: '#/allOf/1/allOf/14/then/anyOf/0/properties/elementType/allOf/0/then/required',
    params: {
      missingProperty: 'eventDefinition'
    },
    message: 'should have required property \'eventDefinition\''
  },
  {
    keyword: 'if',
    dataPath: '/elementType',
    schemaPath: '#/allOf/1/allOf/14/then/anyOf/0/properties/elementType/allOf/0/if',
    params: {
      failingKeyword: 'then'
    },
    message: 'should match "then" schema'
  },
  {
    keyword: 'enum',
    dataPath: '/appliesTo/0',
    schemaPath: '#/allOf/1/allOf/14/then/anyOf/1/properties/appliesTo/items/enum',
    params: {
      allowedValues: [
        'bpmn:ScriptTask',
        'bpmn:BusinessRuleTask',
        'bpmn:ServiceTask',
        'bpmn:SendTask',
        'bpmn:AdHocSubProcess',
        'bpmn:Process'
      ]
    },
    message: 'should be equal to one of the allowed values'
  },
  {
    keyword: 'anyOf',
    dataPath: '',
    schemaPath: '#/allOf/1/allOf/14/then/anyOf',
    params: {},
    message: 'should match some schema in anyOf'
  },
  {
    keyword: 'if',
    dataPath: '',
    schemaPath: '#/allOf/1/allOf/14/if',
    params: {
      failingKeyword: 'then'
    },
    message: 'should match "then" schema'
  },
  {
    keyword: 'type',
    dataPath: '',
    schemaPath: '#/oneOf/1/type',
    params: {
      type: 'array'
    },
    message: 'should be array'
  },
  {
    keyword: 'oneOf',
    dataPath: '',
    schemaPath: '#/oneOf',
    params: {
      passingSchemas: null
    },
    message: 'should match exactly one schema in oneOf'
  }
];
