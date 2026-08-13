import { createServer, type Server } from 'node:http'

import { SeamQueryProvider, useSeamClient } from '@seamapi/react-query'
import { renderHook, waitFor } from '@testing-library/react'
import type { JSX, PropsWithChildren } from 'react'
import { afterEach, beforeEach, expect, test } from 'vitest'

let server: Server
let endpoint: string
let requestPaths: string[]

beforeEach(async () => {
  requestPaths = []
  server = createServer((req, res) => {
    // The happy-dom test environment enforces CORS on the document origin.
    res.setHeader('access-control-allow-origin', '*')
    res.setHeader('access-control-allow-headers', '*')
    res.setHeader('access-control-allow-methods', '*')
    if (req.method === 'OPTIONS') {
      res.statusCode = 204
      res.end()
      return
    }
    requestPaths.push(`${req.method ?? ''} ${req.url ?? ''}`)
    res.setHeader('content-type', 'application/json')
    res.end(JSON.stringify({ devices: [] }))
  })
  await new Promise<void>((resolve) => {
    server.listen(0, '127.0.0.1', resolve)
  })
  const address = server.address()
  if (address == null || typeof address === 'string') {
    throw new Error('Could not determine test server address')
  }
  endpoint = `http://127.0.0.1:${address.port}`
})

afterEach(() => {
  server.close()
})

test('endpoint option is applied to both the client and the endpoint client', async () => {
  const wrapper = ({ children }: PropsWithChildren): JSX.Element => (
    <SeamQueryProvider
      clientSessionToken='seam_cst_test_token'
      endpoint={endpoint}
    >
      {children}
    </SeamQueryProvider>
  )

  const { result } = renderHook(() => useSeamClient(), { wrapper })

  await waitFor(() => {
    expect(result.current.isPending).toBe(false)
  })

  // Regression: passing the endpoint through to SeamHttpEndpoints.fromClient
  // threw SeamHttpInvalidOptionsError, leaving both clients null.
  expect(result.current.isError).toBe(false)
  expect(result.current.client).not.toBeNull()
  expect(result.current.endpointClient).not.toBeNull()

  expect(result.current.client?.client.defaults.baseURL).toBe(endpoint)
  expect(result.current.endpointClient?.client.defaults.baseURL).toBe(endpoint)
})

test('endpoint client sends requests to the configured endpoint', async () => {
  const wrapper = ({ children }: PropsWithChildren): JSX.Element => (
    <SeamQueryProvider
      clientSessionToken='seam_cst_test_token'
      endpoint={endpoint}
    >
      {children}
    </SeamQueryProvider>
  )

  const { result } = renderHook(() => useSeamClient(), { wrapper })

  await waitFor(() => {
    expect(result.current.endpointClient).not.toBeNull()
  })

  await result.current.endpointClient?.['/devices/list']({})

  expect(requestPaths).toEqual(['POST /devices/list'])
})
