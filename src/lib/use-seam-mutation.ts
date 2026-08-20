import type {
  ActionAttempt,
  SeamActionAttemptFailedError,
  SeamActionAttemptTimeoutError,
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
  type EndpointPathByKind,
  type EndpointRequestOptions,
  type EndpointResult,
} from './endpoint-manifest.js'
import {
  type GeneratedEndpointTypes,
  seamEndpointManifest,
} from './generated/connect-endpoint-manifest.js'
import { NullSeamClientError, useSeamClient } from './use-seam-client.js'

type MutationPath = EndpointPathByKind<GeneratedEndpointTypes, 'mutation'>

export type UseSeamMutationVariables<T extends MutationPath> =
  EndpointParameters<GeneratedEndpointTypes, T>

export type UseSeamMutationResult<T extends MutationPath> = UseMutationResult<
  MutationData<T>,
  MutationError<T>,
  UseSeamMutationVariables<T>
>

export function useSeamMutation<T extends MutationPath>(
  endpointPath: T,
  options: EndpointRequestOptions<GeneratedEndpointTypes, T> &
    MutationOptions<
      MutationData<T>,
      MutationError<T>,
      UseSeamMutationVariables<T>
    > = {},
): UseSeamMutationResult<T> {
  const { client } = useSeamClient()
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

type MutationError<T extends MutationPath> =
  | Error
  | SeamHttpApiError
  | SeamHttpInvalidInputError
  | (MutationData<T> extends ActionAttempt
      ? | SeamActionAttemptFailedError<MutationData<T>>
        | SeamActionAttemptTimeoutError<MutationData<T>>
      : never)

type MutationOptions<X, Y, Z> = Omit<UseMutationOptions<X, Y, Z>, 'mutationFn'>
