/*
 * EXPERIMENTAL: This generator belongs to the React Query contract experiment.
 * Keep it self-contained and movable; it is not a package export.
 */
import { readFile } from 'node:fs/promises'

import {
  type Blueprint,
  createBlueprint,
  type Endpoint,
  type Parameter,
  type Property,
  TypesModuleSchema,
} from '@seamapi/blueprint'
import * as connectTypes from '@seamapi/types/connect'
import { parse as parseYaml } from 'yaml'

export interface GenerateManifestOptions {
  source?: string
}

/** Frozen experimental generator entry point. It only accepts an existing Blueprint. */
export function generateReactQueryManifest(
  blueprint: Blueprint,
  options: GenerateManifestOptions = {},
): string {
  const endpoints = blueprint.routes
    .flatMap((route) => route.endpoints)
    .toSorted((a, b) => a.path.localeCompare(b.path))
  const responseResourceTypes = new Set(
    endpoints.flatMap((endpoint) =>
      endpoint.response.responseType === 'void'
        ? []
        : [endpoint.response.resourceType],
    ),
  )
  const resources = new Map(
    [...blueprint.resources, ...blueprint.events, ...blueprint.actionAttempts]
      .filter((resource) => responseResourceTypes.has(resource.resourceType))
      .map((resource) => [resource.resourceType, resource] as const),
  )
  const resourceNames = new Map(
    [...resources.keys()].map((resourceType) => [
      resourceType,
      `Resource${pascalCase(resourceType)}`,
    ]),
  )

  const resourceTypes = [...resources]
    .map(([resourceType, resource]) => {
      const name = `Resource${pascalCase(resourceType)}`
      return `interface ${name} ${objectType(resource.properties, 'property')}\n`
    })
    .join('\n')

  const endpointTypes = endpoints
    .map((endpoint) => {
      const result = resultType(endpoint, resourceNames)
      return `  ${quote(endpoint.path)}: {\n    parameters: ${parametersType(endpoint.request.parameters, endpoint.request.hasRequiredParameters)}\n    result: ${result}\n    kind: ${quote(kind(endpoint))}\n    workspaceScope: ${quote(endpoint.workspaceScope)}\n    actionAttempt: ${endpoint.response.responseType === 'resource' && endpoint.response.actionAttemptType != null ? 'true' : 'false'}\n  }`
    })
    .join('\n')

  const runtimeEntries = endpoints
    .map((endpoint) => {
      const responseKey =
        endpoint.response.responseType === 'void'
          ? undefined
          : endpoint.response.responseKey
      const actionAttemptType =
        endpoint.response.responseType === 'resource'
          ? endpoint.response.actionAttemptType
          : null
      const value = {
        path: endpoint.path,
        kind: kind(endpoint),
        method: endpoint.request.preferredMethod,
        requestPlacement:
          endpoint.request.preferredMethod === 'GET' ? 'params' : 'body',
        responseKey,
        pagination: endpoint.hasPagination
          ? { responseKey: blueprint.pagination?.responseKey ?? 'pagination' }
          : null,
        hasRequiredParameters: endpoint.request.hasRequiredParameters,
        requiredParameterNames: endpoint.request.parameters
          .filter((parameter) => parameter.isRequired)
          .map((parameter) => parameter.name),
        actionAttempt:
          actionAttemptType == null
            ? null
            : { type: actionAttemptType, responseKey },
        workspaceScope: endpoint.workspaceScope,
      }
      return `  ${quote(endpoint.path)}: ${JSON.stringify(value)},`
    })
    .join('\n')

  return `/* eslint-disable */
/*
 * GENERATED FILE. DO NOT EDIT.
 * EXPERIMENTAL React Query endpoint manifest ABI.
 * Source: ${options.source ?? 'Blueprint'}
 */
import type { EndpointManifest } from '../endpoint-manifest.js'

type RequireAtLeastOne<T, K extends keyof T = keyof T> = K extends keyof T
  ? Required<Pick<T, K>> & Partial<Omit<T, K>>
  : never

export const seamEndpointManifestAbiVersion = 1 as const

${resourceTypes}export interface GeneratedEndpointTypes {
${endpointTypes}
}

export const seamEndpointManifest = {
${runtimeEntries}
} as const satisfies EndpointManifest<GeneratedEndpointTypes>
`
}

/** Convenience source used by this repository's local generation script. */
export async function generateConnectManifest(): Promise<string> {
  const blueprint = await createBlueprint(
    TypesModuleSchema.parse(connectTypes),
    {
      // Deliberately include internal/undocumented endpoints in the local fixture.
      omitUndocumented: false,
    },
  )
  return generateReactQueryManifest(blueprint, {
    source: '@seamapi/types/connect (omitUndocumented: false)',
  })
}

export async function createBlueprintFromRawOpenApi(
  openapi: unknown,
  options: { omitUndocumented?: boolean } = {},
): Promise<Blueprint> {
  return await createBlueprint(TypesModuleSchema.parse({ openapi }), options)
}

export async function generateManifestFromOpenApiFile(
  path: string,
  options: { omitUndocumented?: boolean } = {},
): Promise<string> {
  const openapi = parseOpenApi(await readFile(path, 'utf8'))
  const blueprint = await createBlueprintFromRawOpenApi(openapi, options)
  return generateReactQueryManifest(blueprint, { source: path })
}

export async function generateManifestFromOpenApiUrl(
  url: string | URL,
  options: { omitUndocumented?: boolean } = {},
): Promise<string> {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(
      `Failed to fetch OpenAPI from ${String(url)}: ${response.status}`,
    )
  }
  const blueprint = await createBlueprintFromRawOpenApi(
    parseOpenApi(await response.text()),
    options,
  )
  return generateReactQueryManifest(blueprint, { source: String(url) })
}

function parseOpenApi(source: string): unknown {
  return parseYaml(source) as unknown
}

function kind(endpoint: Endpoint): 'query' | 'mutation' {
  return endpoint.request.semanticMethod === 'GET' ? 'query' : 'mutation'
}

function resultType(
  endpoint: Endpoint,
  resourceNames: ReadonlyMap<string, string>,
): string {
  if (endpoint.response.responseType === 'void') return 'undefined'
  const resource =
    resourceNames.get(endpoint.response.resourceType) ?? 'unknown'
  return endpoint.response.responseType === 'resource_list'
    ? `Array<${resource}>`
    : resource
}

function parametersType(
  parameters: Parameter[],
  hasRequiredParameters: boolean,
): string {
  const object = objectType(parameters, 'parameter')
  const hasExplicitRequired = parameters.some(
    (parameter) => parameter.isRequired,
  )
  if (
    !hasRequiredParameters ||
    hasExplicitRequired ||
    parameters.length === 0
  ) {
    return object
  }
  return `RequireAtLeastOne<${object}>`
}

function objectType(
  values: readonly (Parameter | Property)[],
  type: 'parameter' | 'property',
): string {
  if (values.length === 0) return 'Record<string, never>'
  const fields = values.map((value) => {
    const optional =
      type === 'parameter'
        ? !(value as Parameter).isRequired
        : (value as Property).isOptional
    return `${quote(value.name)}${optional ? '?' : ''}: ${valueType(value, type)}${
      value.isNullable ? ' | null' : ''
    }`
  })
  return `{ ${fields.join('; ')} }`
}

function valueType(
  value: Parameter | Property,
  type: 'parameter' | 'property',
): string {
  switch (value.format) {
    case 'string':
    case 'datetime':
    case 'id':
      return 'string'
    case 'number':
      return 'number'
    case 'boolean':
      return 'boolean'
    case 'enum':
      return value.values.length === 0
        ? 'string'
        : value.values.map((item) => quote(item.name)).join(' | ')
    case 'record':
      return 'Record<string, unknown>'
    case 'object':
      return objectType(
        'parameters' in value ? value.parameters : value.properties,
        type,
      )
    case 'list': {
      let item = 'unknown'
      switch (value.itemFormat) {
        case 'string':
        case 'datetime':
        case 'id':
          item = 'string'
          break
        case 'number':
          item = 'number'
          break
        case 'boolean':
          item = 'boolean'
          break
        case 'enum':
          item =
            value.itemEnumValues.length === 0
              ? 'string'
              : value.itemEnumValues
                  .map((entry) => quote(entry.name))
                  .join(' | ')
          break
        case 'record':
          item = 'Record<string, unknown>'
          break
        case 'object':
          item = objectType(
            'itemParameters' in value
              ? value.itemParameters
              : value.itemProperties,
            type,
          )
          break
        case 'discriminated_object':
          item = value.variants
            .map((variant) =>
              objectType(
                'parameters' in variant
                  ? variant.parameters
                  : variant.properties,
                type,
              ),
            )
            .join(' | ')
          break
      }
      return `Array<${item}>`
    }
  }
}

function quote(value: string): string {
  return JSON.stringify(value)
}

function pascalCase(value: string): string {
  return value
    .split(/[^a-zA-Z0-9]+/u)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('')
}
