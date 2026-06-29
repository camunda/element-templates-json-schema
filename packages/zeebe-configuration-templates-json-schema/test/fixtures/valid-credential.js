export const template = {
  'name': 'AWS Credential',
  'id': 'io.camunda:aws-credential:1',
  'kind': 'CREDENTIAL',
  'version': 1,
  'description': 'AWS access credentials for S3, Bedrock, and other AWS services',
  'keywords': [ 'aws', 's3', 'bedrock' ],
  'groups': [
    { 'id': 'auth', 'label': 'Authentication' }
  ],
  'properties': [
    {
      'id': 'typeProperty',
      'label': 'Authentication type',
      'type': 'Dropdown',
      'group': 'auth',
      'binding': { 'type': 'property', 'name': 'type' },
      'choices': [
        { 'name': 'Default credentials chain', 'value': 'defaultCredentialsChain' },
        { 'name': 'Access key / Secret key', 'value': 'credentials' }
      ]
    },
    {
      'label': 'Access key',
      'type': 'String',
      'group': 'auth',
      'secret': true,
      'binding': { 'type': 'property', 'name': 'accessKey' },
      'condition': { 'property': 'typeProperty', 'equals': 'credentials' }
    },
    {
      'label': 'Secret key',
      'type': 'String',
      'group': 'auth',
      'secret': true,
      'binding': { 'type': 'property', 'name': 'secretKey' },
      'condition': { 'property': 'typeProperty', 'equals': 'credentials' }
    }
  ]
};

export const valid = true;
