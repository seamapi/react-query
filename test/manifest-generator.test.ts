import { readFile } from 'node:fs/promises'
import { createServer } from 'node:http'

import { createBlueprint, TypesModuleSchema } from '@seamapi/blueprint'
import {
  generateManifestFromOpenApiFile,
  generateManifestFromOpenApiUrl,
  generateReactQueryManifest,
} from 'experimental/manifest-generator.js'
import { expect, test } from 'vitest'

const fixturePath = `${process.cwd()}/experimental/fixtures/branch-openapi.json`

test('the generator accepts an already-created Blueprint and a raw file', async () => {
  const openapi = JSON.parse(await readFile(fixturePath, 'utf8')) as unknown
  const blueprint = await createBlueprint(
    TypesModuleSchema.parse({ openapi }),
    {
      omitUndocumented: false,
    },
  )
  const fromBlueprint = generateReactQueryManifest(blueprint)
  const fromFile = await generateManifestFromOpenApiFile(fixturePath, {
    omitUndocumented: false,
  })
  const filtered = await generateManifestFromOpenApiFile(fixturePath, {
    omitUndocumented: true,
  })

  for (const artifact of [fromBlueprint, fromFile]) {
    expect(artifact).toContain('"/experimental/widgets/get_branch_widget"')
    expect(artifact).toContain('requestPlacement":"params"')
    expect(artifact).toContain('result: ResourceBranchWidget')
    expect(artifact).toContain('"/experimental/widgets/internal_probe"')
  }
  expect(filtered).not.toContain('"/experimental/widgets/internal_probe"')
})

test('the generator accepts a raw OpenAPI URL', async () => {
  const source = await readFile(fixturePath, 'utf8')
  const server = createServer((_request, response) => {
    response.setHeader('content-type', 'application/json')
    response.setHeader('access-control-allow-origin', '*')
    response.end(source)
  })
  await new Promise<void>((resolve) => server.listen(0, '127.0.0.1', resolve))

  try {
    const address = server.address()
    if (address == null || typeof address === 'string') {
      throw new Error('Expected a TCP test server')
    }
    const artifact = await generateManifestFromOpenApiUrl(
      `http://127.0.0.1:${address.port}/openapi.json`,
    )
    expect(artifact).toContain('"/experimental/widgets/get_branch_widget"')
  } finally {
    await new Promise<void>((resolve, reject) =>
      server.close((error) => (error == null ? resolve() : reject(error))),
    )
  }
})
