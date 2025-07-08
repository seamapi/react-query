import {
  createFake,
  type Database,
  type Seed,
} from '@seamapi/fake-seam-connect'
import { beforeEach } from 'vitest'

export interface ApiTestContext {
  endpoint: string
  seed: Seed
  database: Database
}

beforeEach<ApiTestContext>(async (ctx) => {
  const fake = await createFake()
  await fake.startServer()
  const seed = await fake.seed()
  const endpoint = fake.serverUrl

  if (endpoint == null) throw new Error('Fake endpoint is null')
  const res = await fetch(`${endpoint}/health`)
  if (!res.ok) throw new Error('Fake Seam Connect unhealthy')

  ctx.endpoint = endpoint
  ctx.seed = seed
  ctx.database = fake.database

  return () => {
    fake.server?.close()
  }
})
