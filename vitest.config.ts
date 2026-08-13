import { defineConfig } from 'vitest/config'

export default defineConfig({
  resolve: {
    alias: {
      '@seamapi/react-query': new URL('./src/index.ts', import.meta.url)
        .pathname,
      lib: new URL('./src/lib', import.meta.url).pathname,
      test: new URL('./test', import.meta.url).pathname,
    },
  },
  test: {
    coverage: {
      provider: 'v8',
      reporter: ['html', 'lcov', 'text'],
    },
    environment: 'happy-dom',
    exclude: ['cli/**', 'node_modules/**'],
    include: ['src/**/*.test.ts', 'src/**/*.test.tsx', 'test/**/*.test.tsx'],
  },
})
