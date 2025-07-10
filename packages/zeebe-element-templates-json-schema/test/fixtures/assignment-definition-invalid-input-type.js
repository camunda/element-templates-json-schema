export const template = {
  name: 'AssignmentDefinition',
  id: 'com.camunda.example.AssignmentDefinition',
  appliesTo: [
    'bpmn:Task'
  ],
  elementType: {
    value: 'bpmn:UserTask'
  },
  properties: [
    {
      type: 'Hidden',
      binding: {
        type: 'zeebe:userTask',
      }
    },
    {
      label: 'Assignee',
      type: 'Number',
      binding: {
        type: 'zeebe:assignmentDefinition',
        property: 'assignee'
      }
    },
    {
      label: 'Assignee',
      type: 'Boolean',
      binding: {
        type: 'zeebe:assignmentDefinition',
        property: 'assignee'
      }
    },
    {
      type: 'Number',
      binding: {
        type: 'zeebe:assignmentDefinition',
        property: 'candidateUsers'
      }
    },
    {
      type: 'Boolean',
      binding: {
        type: 'zeebe:assignmentDefinition',
        property: 'candidateUsers'
      }
    },
    {
      type: 'Number',
      value: 'someDefaultGroup',
      binding: {
        type: 'zeebe:assignmentDefinition',
        property: 'candidateGroups'
      }
    },
    {
      type: 'Number',
      value: 'someDefaultGroup',
      binding: {
        type: 'zeebe:assignmentDefinition',
        property: 'candidateGroups'
      }
    }
  ]
};

export const errors = [
  {
    keyword: 'enum',
    dataPath: '/properties/1/type',
    schemaPath: '#/allOf/1/items/allOf/22/then/properties/type/enum',
    params: {
      allowedValues: [
        'Hidden',
        'String',
        'Text',
        'Dropdown'
      ]
    },
    message: 'should be equal to one of the allowed values'
  },
  {
    keyword: 'if',
    dataPath: '/properties/1',
    schemaPath: '#/allOf/1/items/allOf/22/if',
    params: {
      failingKeyword: 'then'
    },
    message: 'should match "then" schema'
  },
  {
    keyword: 'enum',
    dataPath: '/properties/2/type',
    schemaPath: '#/allOf/1/items/allOf/22/then/properties/type/enum',
    params: {
      allowedValues: [
        'Hidden',
        'String',
        'Text',
        'Dropdown'
      ]
    },
    message: 'should be equal to one of the allowed values'
  },
  {
    keyword: 'if',
    dataPath: '/properties/2',
    schemaPath: '#/allOf/1/items/allOf/22/if',
    params: {
      failingKeyword: 'then'
    },
    message: 'should match "then" schema'
  },
  {
    keyword: 'enum',
    dataPath: '/properties/3/type',
    schemaPath: '#/allOf/1/items/allOf/22/then/properties/type/enum',
    params: {
      allowedValues: [
        'Hidden',
        'String',
        'Text',
        'Dropdown'
      ]
    },
    message: 'should be equal to one of the allowed values'
  },
  {
    keyword: 'if',
    dataPath: '/properties/3',
    schemaPath: '#/allOf/1/items/allOf/22/if',
    params: {
      failingKeyword: 'then'
    },
    message: 'should match "then" schema'
  },
  {
    keyword: 'enum',
    dataPath: '/properties/4/type',
    schemaPath: '#/allOf/1/items/allOf/22/then/properties/type/enum',
    params: {
      allowedValues: [
        'Hidden',
        'String',
        'Text',
        'Dropdown'
      ]
    },
    message: 'should be equal to one of the allowed values'
  },
  {
    keyword: 'if',
    dataPath: '/properties/4',
    schemaPath: '#/allOf/1/items/allOf/22/if',
    params: {
      failingKeyword: 'then'
    },
    message: 'should match "then" schema'
  },
  {
    keyword: 'enum',
    dataPath: '/properties/5/type',
    schemaPath: '#/allOf/1/items/allOf/22/then/properties/type/enum',
    params: {
      allowedValues: [
        'Hidden',
        'String',
        'Text',
        'Dropdown'
      ]
    },
    message: 'should be equal to one of the allowed values'
  },
  {
    keyword: 'if',
    dataPath: '/properties/5',
    schemaPath: '#/allOf/1/items/allOf/22/if',
    params: {
      failingKeyword: 'then'
    },
    message: 'should match "then" schema'
  },
  {
    keyword: 'enum',
    dataPath: '/properties/6/type',
    schemaPath: '#/allOf/1/items/allOf/22/then/properties/type/enum',
    params: {
      allowedValues: [
        'Hidden',
        'String',
        'Text',
        'Dropdown'
      ]
    },
    message: 'should be equal to one of the allowed values'
  },
  {
    keyword: 'if',
    dataPath: '/properties/6',
    schemaPath: '#/allOf/1/items/allOf/22/if',
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