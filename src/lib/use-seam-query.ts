import type {
  ActionAttempt,
  SeamActionAttemptFailedError,
  SeamActionAttemptTimeoutError,
  SeamHttpApiError,
  SeamHttpInvalidInputError,
  SeamHttpRequestOptions,
} from '@seamapi/http'
import {
  type QueryKey,
  useQuery,
  type UseQueryOptions,
  type UseQueryResult,
} from '@tanstack/react-query'

import {
  createManifestRequest,
  type EndpointParameters,
  type EndpointPathByKind,
  type EndpointRequestOptions,
  type EndpointResult,
} from './endpoint-manifest.js'
import {
  type GeneratedEndpointTypes,
  seamEndpointManifest,
} from './generated/connect-endpoint-manifest.js'
import { useSeamClient } from './use-seam-client.js'

type QueryPath = EndpointPathByKind<GeneratedEndpointTypes, 'query'>

export type UseSeamQueryParameters<T extends QueryPath> = EndpointParameters<
  GeneratedEndpointTypes,
  T
>

export type UseSeamQueryResult<T extends QueryPath> = UseQueryResult<
  QueryData<T>,
  QueryError<T>
>

export function useSeamQuery<T extends QueryPath>(
  endpointPath: T,
  parameters: UseSeamQueryParameters<T> = {} as UseSeamQueryParameters<T>,
  options: EndpointRequestOptions<GeneratedEndpointTypes, T> &
    QueryOptions<QueryData<T>, SeamHttpApiError> = {},
): UseSeamQueryResult<T> & { queryKey: QueryKey } {
  const { client, queryKeyPrefixes } = useSeamClient()
  const queryKey = [
    ...queryKeyPrefixes,
    ...endpointPath.split('/').filter((value) => value !== ''),
    parameters ?? {},
  ]
  const result = useQuery({
    enabled: client != null,
    ...options,
    queryKey,
    queryFn: async () => {
      if (client == null) {
        throw new Error('Attempted to execute a disabled query')
      }
      return (await createManifestRequest(
        client,
        seamEndpointManifest[endpointPath],
        parameters,
        options as Pick<SeamHttpRequestOptions, 'waitForActionAttempt'>,
      )) as QueryData<T>
    },
  })
  return { ...result, queryKey }
}

type QueryData<T extends QueryPath> = EndpointResult<GeneratedEndpointTypes, T>

type QueryError<T extends QueryPath> =
  | Error
  | SeamHttpApiError
  | SeamHttpInvalidInputError
  | (QueryData<T> extends ActionAttempt
      ? | SeamActionAttemptFailedError<QueryData<T>>
        | SeamActionAttemptTimeoutError<QueryData<T>>
      : never)

type QueryOptions<X, Y> = Omit<UseQueryOptions<X, Y>, 'queryKey' | 'queryFn'>
