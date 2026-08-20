import type {
  SeamHttpApiError,
  SeamHttpInvalidInputError,
  SeamHttpRequestOptions,
} from '@seamapi/http'
import {
  useMutation,
  type UseMutationOptions,
  type UseMutationResult,
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
import { NullSeamClientError, useSeamClient } from './use-seam-client.js'

type MutationPath = EndpointPathWithoutWorkspaceByKind<
  GeneratedEndpointTypes,
  'mutation'
>

export type UseSeamMutationWithoutWorkspaceVariables<T extends MutationPath> =
  EndpointParameters<GeneratedEndpointTypes, T>

export type UseSeamMutationWithoutWorkspaceResult<T extends MutationPath> =
  UseMutationResult<
    MutationData<T>,
    MutationError,
    UseSeamMutationWithoutWorkspaceVariables<T>
  >

export function useSeamMutationWithoutWorkspace<T extends MutationPath>(
  endpointPath: T,
  options: EndpointRequestOptions<GeneratedEndpointTypes, T> &
    MutationOptions<
      MutationData<T>,
      MutationError,
      UseSeamMutationWithoutWorkspaceVariables<T>
    > = {},
): UseSeamMutationWithoutWorkspaceResult<T> {
  const { clientWithoutWorkspace: client } = useSeamClient()
  return useMutation({
    ...options,
    mutationFn: async (variables) => {
      if (client === null) throw new NullSeamClientError()
      return (await createManifestRequest(
        client,
        seamEndpointManifest[endpointPath],
        variables,
        options as Pick<SeamHttpRequestOptions, 'waitForActionAttempt'>,
      )) as MutationData<T>
    },
  })
}

type MutationData<T extends MutationPath> = EndpointResult<
  GeneratedEndpointTypes,
  T
>
type MutationError = Error | SeamHttpApiError | SeamHttpInvalidInputError
type MutationOptions<X, Y, Z> = Omit<UseMutationOptions<X, Y, Z>, 'mutationFn'>
