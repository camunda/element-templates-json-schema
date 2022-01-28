import json from '@rollup/plugin-json';

import pkg from './package.json';


function pgl(plugins = []) {
  return [
    json(),
    ...plugins
  ];
}

const srcEntry = pkg.source;

export default [
  {
    input: srcEntry,
    output: [
      { file: pkg.main, format: 'cjs' }
    ],
    external: [
      '@bpmn-io/json-schema-validator'
    ],
    plugins: pgl()
  }
];