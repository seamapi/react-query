import { defineConfig } from 'vitest/config'

export default defineConfig({
  resolve: {
    alias: {
      '@seamapi/react-query': new URL('./src/index.ts', import.meta.url)
        .pathname,
      lib: new URL('./src/lib', import.meta.url).pathname,
    },
  },
  test: {
    environment: 'happy-dom',
  },
})
