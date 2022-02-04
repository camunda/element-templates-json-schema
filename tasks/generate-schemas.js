const util = require('util');
const refParser = require('@apidevtools/json-schema-ref-parser');

const writeFile = require('fs').writeFileSync,
      mkdir = require('fs').mkdirSync;

const pathJoin = require('path').join,
      dirname = require('path').dirname;

const platformSchema = require('../src/platform.json');
const cloudSchema = require('../src/cloud.json');


async function bundleSchema(schema, path) {
  try {
    const plainSchema = await refParser.bundle(schema);
    return writeSchema(plainSchema, path);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}


function writeSchema(schema, path) {
  const filePath = pathJoin('resources', path);

  try {
    mkdir(dirname(filePath));
  } catch {

    // directory may already exist
  }

  writeFile(filePath, JSON.stringify(schema, 0, 2));

  return filePath;
}


// (1) generate Camunda Platform JSON Schema (C7)
bundleSchema(platformSchema, 'schema.json');

// (2) generate Camunda Cloud JSON Schema (C8)
bundleSchema(cloudSchema, 'cloud.json');


// helper /////////////

// eslint-disable-next-line no-unused-vars
function printNested(object) {
  console.log(util.inspect(object, {
    showHidden: false,
    depth: null,
    colors: true
  }));
}