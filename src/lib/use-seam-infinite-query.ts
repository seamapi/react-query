import type {
  ActionAttempt,
  SeamActionAttemptFailedError,
  SeamActionAttemptTimeoutError,
  SeamHttpApiError,
  SeamHttpInvalidInputError,
  SeamHttpRequest,
  SeamHttpRequestOptions,
  SeamPageCursor,
} from '@seamapi/http'
import {
  type InfiniteData,
  type QueryKey,
  useInfiniteQuery,
  type UseInfiniteQueryOptions,
  type UseInfiniteQueryResult,
} from '@tanstack/react-query'

import {
  createManifestRequest,
  type EndpointParameters,
  type EndpointRequestOptions,
  type EndpointResult,
} from './endpoint-manifest.js'
import {
  type GeneratedEndpointTypes,
  seamEndpointManifest,
} from './generated/connect-endpoint-manifest.js'
import { useSeamClient } from './use-seam-client.js'

type PaginatedQueryPath = {
  [P in keyof GeneratedEndpointTypes]: GeneratedEndpointTypes[P] extends {
    kind: 'query'
  }
    ? (typeof seamEndpointManifest)[P] extends { pagination: object }
      ? P
      : never
    : never
}[keyof GeneratedEndpointTypes] &
  string

export type UseSeamInfiniteQueryParameters<T extends PaginatedQueryPath> =
  EndpointParameters<GeneratedEndpointTypes, T>

export type UseSeamInfiniteQueryResult<T extends PaginatedQueryPath> =
  UseInfiniteQueryResult<InfiniteData<QueryData<T>>, QueryError<T>>

export function useSeamInfiniteQuery<T extends PaginatedQueryPath>(
  endpointPath: T,
  parameters: UseSeamInfiniteQueryParameters<T> = {} as UseSeamInfiniteQueryParameters<T>,
  options: EndpointRequestOptions<GeneratedEndpointTypes, T> &
    QueryOptions<QueryData<T>, QueryError<T>> = {},
): UseSeamInfiniteQueryResult<T> & { queryKey: QueryKey } {
  const { client, queryKeyPrefixes } = useSeamClient()

  if ('page_cursor' in (parameters ?? {})) {
    throw new Error('Cannot use page_cursor with useSeamInfiniteQuery')
  }

  const queryKey = [
    ...queryKeyPrefixes,
    ...endpointPath.split('/').filter((value) => value !== ''),
    parameters ?? {},
  ]
  const result = useInfiniteQuery<
    QueryData<T>,
    QueryError<T>,
    InfiniteData<QueryData<T>>,
    QueryKey,
    SeamPageCursor | null
  >({
    enabled: client != null,
    ...options,
    queryKey,
    initialPageParam: null,
    getNextPageParam: (lastPage) => lastPage.nextPageCursor,
    queryFn: async ({ pageParam }) => {
      if (client == null) {
        return {
          data: [] as QueryResult<T>,
          nextPageCursor: null,
        }
      }
      const request = createManifestRequest(
        client,
        seamEndpointManifest[endpointPath],
        parameters,
        options as Pick<SeamHttpRequestOptions, 'waitForActionAttempt'>,
      )
      const pages = client.createPaginator(
        request as SeamHttpRequest<Record<string, unknown>, string>,
      ) as unknown as ManifestPaginator<QueryResult<T>>
      const [data, { nextPageCursor }] =
        pageParam == null
          ? await pages.firstPage()
          : await pages.nextPage(pageParam as SeamPageCursor)
      return { data, nextPageCursor }
    },
  })
  return { ...result, queryKey }
}

interface ManifestPaginator<T> {
  firstPage(): Promise<[T, { nextPageCursor: SeamPageCursor | null }]>
  nextPage(
    cursor: SeamPageCursor,
  ): Promise<[T, { nextPageCursor: SeamPageCursor | null }]>
}

interface QueryData<T extends PaginatedQueryPath> {
  data: QueryResult<T>
  nextPageCursor: SeamPageCursor | null
}

type QueryResult<T extends PaginatedQueryPath> = EndpointResult<
  GeneratedEndpointTypes,
  T
>

type QueryError<T extends PaginatedQueryPath> =
  | Error
  | SeamHttpApiError
  | SeamHttpInvalidInputError
  | (QueryResult<T> extends ActionAttempt
      ? | SeamActionAttemptFailedError<QueryResult<T>>
        | SeamActionAttemptTimeoutError<QueryResult<T>>
      : never)

type QueryOptions<X, Y> = Omit<
  UseInfiniteQueryOptions<
    X,
    Y,
    InfiniteData<X>,
    QueryKey,
    SeamPageCursor | null
  >,
  'queryKey' | 'queryFn' | 'initialPageParam' | 'getNextPageParam'
>
