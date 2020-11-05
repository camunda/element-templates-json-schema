export const template = {
  'name': 'Invalid',
  'id': 'foo',
  'properties': [],
  'appliesTo': 'bpmn:Task'
};

export const errors = [
  {
    keyword: 'type',
    dataPath: '/appliesTo',
    schemaPath: '#/properties/appliesTo/type',
    params: { type: 'array' },
    message: 'should be array'
  }
];