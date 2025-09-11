export const template = {
  '$schema': 'https://unpkg.com/@camunda/zeebe-element-templates-json-schema/resources/schema.json',
  'name': 'AdHoc Template',
  'id': 'io.camunda.examples.AdHoc.Valid',
  'description': 'activeElementsCollection, completionCondition, and cancelRemainingInstances cannot be set together with job worker properties',
  'version': 1,
  'appliesTo': [ 'bpmn:AdHocSubProcess' ],
  'elementType': { 'value': 'bpmn:AdHocSubProcess' },
  'properties': [
    {
      'type': 'Hidden',
      'binding': { 'type': 'zeebe:taskDefinition', 'property': 'type' },
      'value': 'io.camunda.agenticai:aiagent-job-worker:1'
    },
    {
      'type': 'Hidden',
      'binding': {
        'type': 'property',
        'name': 'cancelRemainingInstances'
      },
      'value': 'false'
    },
    {
      'type': 'String',
      'feel': 'required',
      'binding': {
        'type': 'property',
        'name': 'completionCondition'
      }
    },
    {
      'type': 'Hidden',
      'binding': { 'type': 'zeebe:adHoc', 'property': 'activeElementsCollection' },
      'value': '=anActiveElementsCollection'
    }
  ]
};

export const errors = [
  {
    keyword: 'errorMessage',
    dataPath: '/properties/1',
    schemaPath: '#/allOf/1/allOf/9/allOf/2/then/allOf/0/properties/properties/items/errorMessage',
    params: {
      errors: [
        {
          keyword: 'not',
          dataPath: '/properties/1',
          schemaPath: '#/allOf/1/allOf/9/allOf/2/then/allOf/0/properties/properties/items/not',
          params: {},
          message: 'should NOT be valid',
          emUsed: true
        }
      ]
    },
    message: 'Property "cancelRemainingInstances" must not be set when using a "zeebe:taskDefinition" implementation for a "bpmn:AdHocSubProcess"'
  },
  {
    keyword: 'errorMessage',
    dataPath: '/properties/2',
    schemaPath: '#/allOf/1/allOf/9/allOf/2/then/allOf/0/properties/properties/items/errorMessage',
    params: {
      errors: [
        {
          keyword: 'not',
          dataPath: '/properties/2',
          schemaPath: '#/allOf/1/allOf/9/allOf/2/then/allOf/0/properties/properties/items/not',
          params: {},
          message: 'should NOT be valid',
          emUsed: true
        }
      ]
    },
    message: 'Property "completionCondition" must not be set when using a "zeebe:taskDefinition" implementation for a "bpmn:AdHocSubProcess"'
  },
  {
    keyword: 'errorMessage',
    dataPath: '/properties/3',
    schemaPath: '#/allOf/1/allOf/9/allOf/2/then/allOf/1/properties/properties/items/errorMessage',
    params: {
      errors: [
        {
          keyword: 'not',
          dataPath: '/properties/3',
          schemaPath: '#/allOf/1/allOf/9/allOf/2/then/allOf/1/properties/properties/items/not',
          params: {},
          message: 'should NOT be valid',
          emUsed: true
        }
      ]
    },
    message: 'Property "activeElementsCollection" must not be set when using a "zeebe:taskDefinition" implementation for a "bpmn:AdHocSubProcess"'
  },
  {
    keyword: 'if',
    dataPath: '',
    schemaPath: '#/allOf/1/allOf/9/allOf/2/if',
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