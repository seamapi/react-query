/* EXPERIMENTAL: verifies code-generation dependencies stay build-time-only. */
import { gzipSync } from 'node:zlib'

import { build } from 'vite'

const output = await build({
  configFile: false,
  logLevel: 'silent',
  build: {
    minify: true,
    write: false,
    lib: {
      entry: new URL('../src/index.ts', import.meta.url).pathname,
      formats: ['es'],
      fileName: 'react-query-manifest-experiment',
    },
    rollupOptions: {
      external: [
        '@seamapi/http',
        '@tanstack/react-query',
        'react',
        'react-dom',
        'react/jsx-runtime',
      ],
    },
  },
})

const outputs = (Array.isArray(output)
  ? output
  : [output]) as unknown as Array<{
  output: Array<{ type: string; code?: string }>
}>
const code = outputs
  .flatMap((entry) => entry.output)
  .filter((entry) => entry.type === 'chunk')
  .map((entry) => entry.code ?? '')
  .join('\n')
const forbidden = [
  '@seamapi/blueprint',
  '@seamapi/types',
  'yaml/dist',
  'openapi-types',
]
for (const dependency of forbidden) {
  if (code.includes(dependency)) {
    throw new Error(
      `Browser bundle contains code-generation dependency: ${dependency}`,
    )
  }
}

// eslint-disable-next-line no-console
console.log(
  JSON.stringify({
    bytes: Buffer.byteLength(code),
    gzipBytes: gzipSync(code).byteLength,
    forbiddenDependencies: 'absent',
  }),
)
