import { SeamHttp } from '@seamapi/http'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { act, renderHook, waitFor } from '@testing-library/react'
import type { PropsWithChildren } from 'react'
import { expect, test, vi } from 'vitest'

import {
  seamContext,
  useSeamClient,
  useSeamInfiniteQuery,
  useSeamMutation,
  useSeamQuery,
} from '@seamapi/react-query'

type RequestConfig = {
  url: string
  method: string
  data?: Record<string, unknown>
  params?: Record<string, unknown>
}

function setup(respond: (config: RequestConfig) => Record<string, unknown>): {
  client: SeamHttp
  request: ReturnType<typeof vi.fn>
  wrapper: (props: PropsWithChildren) => React.JSX.Element
} {
  const request = vi.fn(async (config: RequestConfig) => ({
    data: respond(config),
  }))
  const rawClient = {
    defaults: { baseURL: 'https://example.test', headers: {} },
    request,
  } as unknown as Parameters<typeof SeamHttp.fromClient>[0]
  const client = SeamHttp.fromClient(rawClient)
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false }, mutations: { retry: false } },
  })
  const wrapper = ({ children }: PropsWithChildren): React.JSX.Element => (
    <QueryClientProvider client={queryClient}>
      <seamContext.Provider
        value={{
          client,
          endpointClient: null,
          queryKeyPrefix: 'manifest-contract-test',
          userIdentifierKey: 'manifest-contract-user',
        }}
      >
        {children}
      </seamContext.Provider>
    </QueryClientProvider>
  )
  return { client, request, wrapper }
}

test('a documented query is typed, requested, and response-key unwrapped', async () => {
  const { request, wrapper } = setup(() => ({
    ok: true,
    device: { device_id: 'device-1', display_name: 'Front door' },
  }))
  const { result } = renderHook(
    () => useSeamQuery('/devices/get', { device_id: 'device-1' }),
    { wrapper },
  )

  await waitFor(() => expect(result.current.isSuccess).toBe(true))
  expect(result.current.data?.device_id).toBe('device-1')
  expect(request).toHaveBeenCalledWith(
    expect.objectContaining({
      url: '/devices/get',
      method: 'GET',
      params: { device_id: 'device-1' },
    }),
  )
})

test('a documented mutation is typed and requested through SeamHttpRequest', async () => {
  const { request, wrapper } = setup(() => ({ ok: true }))
  const { result } = renderHook(
    () => ({
      client: useSeamClient().client,
      mutation: useSeamMutation('/devices/update'),
    }),
    { wrapper },
  )

  await waitFor(() => expect(result.current.client).not.toBeNull())
  await act(async () => {
    await result.current.mutation.mutateAsync({
      device_id: 'device-1',
      name: 'Back door',
    })
  })
  expect(request).toHaveBeenCalledWith(
    expect.objectContaining({
      url: '/devices/update',
      method: 'PATCH',
      data: { device_id: 'device-1', name: 'Back door' },
    }),
  )
})

test('a paginated query fetches the next page', async () => {
  const { request, wrapper } = setup((config) => {
    const secondPage = config.data?.['page_cursor'] === 'next'
    return {
      ok: true,
      devices: [{ device_id: secondPage ? 'device-2' : 'device-1' }],
      pagination: {
        has_next_page: !secondPage,
        next_page_cursor: secondPage ? null : 'next',
        next_page_url: null,
      },
    }
  })
  const { result } = renderHook(() => useSeamInfiniteQuery('/devices/list'), {
    wrapper,
  })

  await waitFor(() => expect(result.current.isSuccess).toBe(true))
  await act(async () => await result.current.fetchNextPage())
  await waitFor(() => expect(result.current.data?.pages).toHaveLength(2))
  expect(result.current.data?.pages[1]?.data[0]?.device_id).toBe('device-2')
  expect(request).toHaveBeenLastCalledWith(
    expect.objectContaining({ data: { page_cursor: 'next' } }),
  )
})

test('an action-attempt mutation retains wait and unwrap behavior', async () => {
  const actionAttempt = {
    action_attempt_id: 'aa-1',
    action_type: 'UNLOCK_DOOR',
    status: 'success',
    result: null,
    error: null,
  }
  const { wrapper } = setup(() => ({ ok: true, action_attempt: actionAttempt }))
  const { result } = renderHook(
    () => ({
      client: useSeamClient().client,
      mutation: useSeamMutation('/locks/unlock_door'),
    }),
    { wrapper },
  )

  await waitFor(() => expect(result.current.client).not.toBeNull())
  await act(async () => {
    const value = await result.current.mutation.mutateAsync({
      device_id: 'device-1',
    })
    expect(value.action_attempt_id).toBe('aa-1')
  })
})

test('a branch-only raw-OpenAPI endpoint executes without an HTTP client change', async () => {
  const { request, wrapper } = setup(() => ({
    ok: true,
    branch_widget: {
      branch_widget_id: 'widget-1',
      label: 'Experiment',
      revision: 1,
    },
  }))
  const { result } = renderHook(
    () =>
      useSeamQuery('/experimental/widgets/get_branch_widget', {
        branch_widget_id: 'widget-1',
      }),
    { wrapper },
  )

  await waitFor(() => expect(result.current.isSuccess).toBe(true))
  expect(result.current.data?.label).toBe('Experiment')
  expect(request).toHaveBeenCalledWith(
    expect.objectContaining({ url: '/experimental/widgets/get_branch_widget' }),
  )
})
