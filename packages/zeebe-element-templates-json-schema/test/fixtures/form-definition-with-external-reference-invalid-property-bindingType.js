export const template = {
  '$schema': 'https://unpkg.com/@camunda/zeebe-element-templates-json-schema/resources/schema.json',
  'name': 'Form Definition with external reference',
  'id': 'formDefinitionWithExternalReference',
  'appliesTo': [
    'bpmn:Task'
  ],
  'elementType': {
    'value': 'bpmn:UserTask'
  },
  'properties': [
    {
      'type': 'Hidden',
      'binding': {
        'type': 'zeebe:userTask',
      }
    },
    {
      'type': 'Hidden',
      'value': 'aReference',
      'binding': {
        'type': 'zeebe:formDefinition',
        'property': 'externalReference'
      }
    },
    {
      'type': 'Hidden',
      'value': 'deployment',
      'binding': {
        'type': 'zeebe:formDefinition',
        'property': 'bindingType'
      }
    }
  ]
};

export const errors = [
  {
    keyword: 'required',
    dataPath: '/properties/0/binding',
    schemaPath: '#/allOf/1/allOf/8/then/properties/properties/contains/properties/binding/required',
    params: {
      missingProperty: 'property'
    },
    message: "should have required property 'property'"
  },
  {
    keyword: 'const',
    dataPath: '/properties/0/binding/type',
    schemaPath: '#/allOf/1/allOf/8/then/properties/properties/contains/properties/binding/properties/type/const',
    params: {
      allowedValue: 'zeebe:formDefinition'
    },
    message: 'should be equal to constant'
  },
  {
    keyword: 'const',
    dataPath: '/properties/1/binding/property',
    schemaPath: '#/allOf/1/allOf/8/then/properties/properties/contains/properties/binding/properties/property/const',
    params: {
      allowedValue: 'formId'
    },
    message: 'should be equal to constant'
  },
  {
    keyword: 'const',
    dataPath: '/properties/2/binding/property',
    schemaPath: '#/allOf/1/allOf/8/then/properties/properties/contains/properties/binding/properties/property/const',
    params: {
      allowedValue: 'formId'
    },
    message: 'should be equal to constant'
  },
  {
    keyword: 'contains',
    dataPath: '/properties',
    schemaPath: '#/allOf/1/allOf/8/then/properties/properties/contains',
    params: {
      minContains: 1
    },
    message: 'should contain at least 1 valid item(s)'
  },
  {
    keyword: 'if',
    dataPath: '',
    schemaPath: '#/allOf/1/allOf/8/if',
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