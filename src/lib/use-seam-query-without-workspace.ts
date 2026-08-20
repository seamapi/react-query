import type {
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
  type EndpointPathWithoutWorkspaceByKind,
  type EndpointRequestOptions,
  type EndpointResult,
} from './endpoint-manifest.js'
import {
  type GeneratedEndpointTypes,
  seamEndpointManifest,
} from './generated/connect-endpoint-manifest.js'
import { useSeamClient } from './use-seam-client.js'

type QueryPath = EndpointPathWithoutWorkspaceByKind<
  GeneratedEndpointTypes,
  'query'
>

export type UseSeamQueryWithoutWorkspaceParameters<T extends QueryPath> =
  EndpointParameters<GeneratedEndpointTypes, T>

export type UseSeamQueryWithoutWorkspaceResult<T extends QueryPath> =
  UseQueryResult<QueryData<T>, QueryError>

export function useSeamQueryWithoutWorkspace<T extends QueryPath>(
  endpointPath: T,
  parameters: UseSeamQueryWithoutWorkspaceParameters<T> = {} as UseSeamQueryWithoutWorkspaceParameters<T>,
  options: EndpointRequestOptions<GeneratedEndpointTypes, T> &
    QueryOptions<QueryData<T>, QueryError> = {},
): UseSeamQueryWithoutWorkspaceResult<T> & { queryKey: QueryKey } {
  const { clientWithoutWorkspace: client, queryKeyPrefixes } = useSeamClient()
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
type QueryError = Error | SeamHttpApiError | SeamHttpInvalidInputError
type QueryOptions<X, Y> = Omit<UseQueryOptions<X, Y>, 'queryKey' | 'queryFn'>
