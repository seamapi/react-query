/* EXPERIMENTAL: repository-local code generation entry point. */
import { readFile, writeFile } from 'node:fs/promises'

import { createBlueprint, TypesModuleSchema } from '@seamapi/blueprint'
import * as connectTypes from '@seamapi/types/connect'
import { format } from 'prettier'

import { generateReactQueryManifest } from './manifest-generator.js'

const branchFixtureUrl = new URL(
  './fixtures/branch-openapi.json',
  import.meta.url,
)
const branchOpenApi = JSON.parse(await readFile(branchFixtureUrl, 'utf8')) as {
  paths: Record<string, unknown>
  components: { schemas: Record<string, unknown> }
}
const connectOpenApi = connectTypes.openapi as Record<string, unknown> & {
  paths: Record<string, unknown>
  components: Record<string, unknown> & { schemas: Record<string, unknown> }
}
const openapi = {
  ...connectOpenApi,
  paths: { ...connectOpenApi.paths, ...branchOpenApi.paths },
  components: {
    ...connectOpenApi.components,
    schemas: {
      ...connectOpenApi.components.schemas,
      ...branchOpenApi.components.schemas,
    },
  },
}
const blueprint = await createBlueprint(
  TypesModuleSchema.parse({ ...connectTypes, openapi }),
  {
    // Deliberately keep undocumented endpoints in this internal/local fixture.
    omitUndocumented: false,
  },
)
const artifact = generateReactQueryManifest(blueprint, {
  source:
    '@seamapi/types/connect + experimental/fixtures/branch-openapi.json (omitUndocumented: false)',
})
const output = new URL(
  '../src/lib/generated/connect-endpoint-manifest.ts',
  import.meta.url,
)
await writeFile(
  output,
  await format(artifact, {
    filepath: output.pathname,
    semi: false,
    singleQuote: true,
    jsxSingleQuote: true,
    endOfLine: 'lf',
  }),
)
