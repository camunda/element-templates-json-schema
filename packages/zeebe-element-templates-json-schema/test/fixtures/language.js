export const template = {
  name: 'Pattern Template',
  id: 'com.example.PatternTemplate',
  appliesTo: [
    'bpmn:Task'
  ],
  properties: [
    {
      label: 'Language (valid on <Text>)',
      type: 'Text',
      language: 'GraphQL',
      binding: {
        type: 'property',
        name: 'prop'
      }
    },
    {
      label: 'Language (invalid on <String>)',
      type: 'String',
      language: 'GraphQL',
      binding: {
        type: 'property',
        name: 'prop'
      }
    },
    {
      label: 'Language (invalid type)',
      type: 'String',
      language: 1,
      binding: {
        type: 'property',
        name: 'prop'
      }
    }
  ]
};


export const errors = [
  {
    keyword: 'errorMessage',
    dataPath: '/properties/1/type',
    schemaPath: '#/allOf/1/items/allOf/5/then/properties/type/errorMessage',
    params: {
      errors: [
        {
          keyword: 'enum',
          dataPath: '/properties/1/type',
          schemaPath: '#/allOf/1/items/allOf/5/then/properties/type/enum',
          params: {
            allowedValues: [
              'Text'
            ]
          },
          message: 'should be equal to one of the allowed values',
          emUsed: true
        }
      ]
    },
    message: 'language is only supported for "Text" type'
  },
  {
    dataPath: '/properties/1',
    keyword: 'if',
    message: 'should match "then" schema',
    params: {
      failingKeyword: 'then'
    },
    schemaPath: '#/allOf/1/items/allOf/5/if',
  },
  {
    keyword: 'errorMessage',
    dataPath: '/properties/2/type',
    schemaPath: '#/allOf/1/items/allOf/5/then/properties/type/errorMessage',
    params: {
      errors: [
        {
          keyword: 'enum',
          dataPath: '/properties/2/type',
          schemaPath: '#/allOf/1/items/allOf/5/then/properties/type/enum',
          params: {
            allowedValues: [
              'Text'
            ]
          },
          message: 'should be equal to one of the allowed values',
          emUsed: true
        }
      ]
    },
    message: 'language is only supported for "Text" type'
  },
  {
    dataPath: '/properties/2',
    keyword: 'if' ,
    message: 'should match "then" schema',
    params: {
      failingKeyword: 'then'
    },
    schemaPath: '#/allOf/1/items/allOf/5/if'
  },
  {
    dataPath: '/properties/2/language',
    keyword: 'type',
    message: 'should be string',
    params: {
      type: 'string'
    },
    schemaPath: '#/allOf/1/items/properties/language/type'
  },
  {
    dataPath: '',
    keyword: 'type',
    message: 'should be array',
    params: {
      type: 'array'
    },
    schemaPath: '#/oneOf/1/type'
  },
  {
    dataPath: '',
    keyword: 'oneOf',
    message: 'should match exactly one schema in oneOf',
    params: {
      passingSchemas: null
    },
    schemaPath: '#/oneOf'
  }
];