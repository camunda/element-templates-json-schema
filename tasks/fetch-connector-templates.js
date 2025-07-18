/**
 * Copyright Camunda Services GmbH and/or licensed to Camunda Services GmbH
 * under one or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information regarding copyright
 * ownership.
 *
 * Camunda licenses this file to you under the MIT; you may not use this file
 * except in compliance with the MIT License.
 */

import { writeFileSync as writeFile } from 'fs';
import { resolve as pathResolve } from 'path';

const URL = 'https://marketplace.cloud.camunda.io/api/v1/ootb-connectors';

const templates = await fetchTemplates();

writeFile(
  pathResolve('packages/zeebe-element-templates-json-schema/test/integration/ootb-connector-templates.json'),
  JSON.stringify(templates, null, 2)
);

/**
 * Fetch OOTB connector templates from the Camunda Marketplace.
 *
 * @returns {Promise<Template[]>} templates
 */
async function fetchTemplates() {
  console.info('Fetching and updating templates');

  let response = await fetch(URL);

  if (!response.ok) {
    console.warn(`Failed to fetch templates from ${ URL } (HTTP ${ response.status })`);

    return [];
  }

  /** @type {TemplatesByIdMetadata} */
  const templatesByIdMetadata = await response.json();

  const tasks = [];

  for (const id in templatesByIdMetadata) {
    const templatesMetadata = templatesByIdMetadata[ id ];

    for (const templateMetadata of templatesMetadata) {
      tasks.push(fetchTemplate(templateMetadata, id));
    }
  }

  return (await Promise.all(tasks)).filter(template => template !== null);
}

async function fetchTemplate(templateMetadata, id) {
  const { ref } = templateMetadata;

  const response = await fetch(ref);

  if (!response.ok) {
    console.warn(`Failed to fetch template ${ id } version ${ templateMetadata.version } from ${ ref } (HTTP ${ response.status })`);

    return null;
  }

  try {
    const templateText = await response.text();
    let templateJson = JSON.parse(templateText);

    console.info(`Fetched template ${ id } version ${ templateMetadata.version } from ${ ref }`);

    return templateJson;
  } catch (error) {
    console.warn(`Failed to parse template ${ id } version ${ templateMetadata.version } fetched from ${ ref }`, error);

    return null;
  }
}
