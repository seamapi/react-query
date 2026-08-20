import {
  type SeamHttp,
  SeamHttpRequest,
  type SeamHttpRequestOptions,
  type SeamHttpWithoutWorkspace,
} from '@seamapi/http'

export type EndpointKind = 'query' | 'mutation'
export type RequestPlacement = 'params' | 'body'

export interface RuntimeEndpointMetadata {
  readonly path: string
  readonly kind: EndpointKind
  readonly method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
  readonly requestPlacement: RequestPlacement
  readonly responseKey?: string | undefined
  readonly pagination: { readonly responseKey: string } | null
  readonly hasRequiredParameters: boolean
  readonly requiredParameterNames: readonly string[]
  readonly actionAttempt: {
    readonly type: string
    readonly responseKey: string | undefined
  } | null
  readonly workspaceScope: 'required' | 'optional' | 'none'
}

export type EndpointManifest<TEndpointTypes> = {
  readonly [P in keyof TEndpointTypes]: RuntimeEndpointMetadata & {
    readonly path: P & string
  }
}

export interface EndpointType {
  parameters: unknown
  result: unknown
  kind: EndpointKind
  workspaceScope: 'required' | 'optional' | 'none'
  actionAttempt: boolean
}

export type EndpointPathByKind<TEndpointTypes, TKind extends EndpointKind> = {
  [P in keyof TEndpointTypes]: TEndpointTypes[P] extends {
    kind: TKind
  }
    ? P
    : never
}[keyof TEndpointTypes] &
  string

export type EndpointPathWithoutWorkspaceByKind<
  TEndpointTypes,
  TKind extends EndpointKind,
> = {
  [P in keyof TEndpointTypes]: TEndpointTypes[P] extends {
    kind: TKind
    workspaceScope: 'none'
  }
    ? P
    : never
}[keyof TEndpointTypes] &
  string

export type EndpointParameters<
  TEndpointTypes,
  P extends keyof TEndpointTypes,
> = TEndpointTypes[P] extends { parameters: infer TParameters }
  ? TParameters
  : never

export type EndpointResult<
  TEndpointTypes,
  P extends keyof TEndpointTypes,
> = TEndpointTypes[P] extends { result: infer TResult } ? TResult : never

export type EndpointRequestOptions<
  TEndpointTypes,
  P extends keyof TEndpointTypes,
> = TEndpointTypes[P] extends { actionAttempt: true }
  ? Pick<SeamHttpRequestOptions, 'waitForActionAttempt'>
  : unknown

export type ManifestHttpClient = SeamHttp | SeamHttpWithoutWorkspace

/** Create the one request primitive supplied by @seamapi/http; no client is generated. */
export function createManifestRequest(
  client: ManifestHttpClient,
  endpoint: RuntimeEndpointMetadata,
  parameters: unknown,
  options: Pick<SeamHttpRequestOptions, 'waitForActionAttempt'> = {},
): SeamHttpRequest<Record<string, unknown>, string | undefined> {
  const placement =
    endpoint.requestPlacement === 'params'
      ? { params: asParameterRecord(parameters) }
      : { body: parameters }
  const actionAttempts =
    endpoint.actionAttempt != null && 'actionAttempts' in client
      ? { actionAttempts: client.actionAttempts }
      : {}

  return new SeamHttpRequest(client, {
    pathname: endpoint.path,
    method: endpoint.method,
    ...placement,
    parameters,
    hasRequiredParameters: endpoint.hasRequiredParameters,
    requiredParameterNames: endpoint.requiredParameterNames,
    responseKey: endpoint.responseKey,
    options,
    ...actionAttempts,
  })
}

function asParameterRecord(
  parameters: unknown,
): Record<string, unknown> | undefined {
  if (parameters == null) return undefined
  if (typeof parameters !== 'object' || Array.isArray(parameters)) {
    return undefined
  }
  return parameters as Record<string, unknown>
}
