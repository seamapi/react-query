# Experimental React Query manifest contract

> **Status:** PR-only experiment. Do not publish these generator entry points or
> move ownership based on this document. The experiment is intentionally kept in
> `experimental/`.

## Frozen manifest ABI

This experiment freezes **ABI version 1** (emitted as
`seamEndpointManifestAbiVersion`) as a TypeScript artifact with two parts:

1. `GeneratedEndpointTypes`, a path-keyed type map.
2. `seamEndpointManifest`, a path-keyed runtime object satisfying
   `EndpointManifest<GeneratedEndpointTypes>`.

Each runtime entry has this shape:

```ts
interface RuntimeEndpointMetadata {
  path: string
  kind: 'query' | 'mutation'
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
  requestPlacement: 'params' | 'body'
  responseKey?: string
  pagination: { responseKey: string } | null
  hasRequiredParameters: boolean
  requiredParameterNames: readonly string[]
  actionAttempt: { type: string; responseKey: string | undefined } | null
  workspaceScope: 'required' | 'optional' | 'none'
}
```

The path is intentionally present both as the object key and as `path`. This
makes an individual entry self-contained and permits an ABI consumer to verify
or serialize entries without retaining the original map key.

`kind` comes from Blueprint's semantic method, not the selected wire method.
`method` is Blueprint's preferred wire method. `GET` parameters use `params`;
all other preferred methods use `body`.

### Compile-time versus runtime

| Field | Type artifact | Browser runtime | Reason |
| --- | --- | --- | --- |
| Path | Yes | Yes | Hook constraint, query key, and request pathname |
| Parameter type | Yes | No | Call-site checking only |
| Result type | Yes | No | Hook result inference only |
| Semantic kind | Yes | Yes | Select hook path unions and inspect the artifact |
| Workspace scope | Yes | Yes | Select without-workspace hook unions and inspect the artifact |
| Action-attempt boolean/type | Yes | Yes | Error/options types and request execution |
| HTTP method and placement | No | Yes | Request execution |
| Response key | No | Yes | `SeamHttpRequest` unwrapping |
| Pagination metadata | No | Yes | Infinite-query eligibility and future paginator work |
| Required parameter metadata | Reflected in the parameter type | Yes | Type errors and `SeamHttpRequest` runtime validation |

The generated artifact contains no Blueprint, OpenAPI, YAML, or code-generator
imports. It has one type-only import of the small local ABI declaration.

## Generator API

The frozen core signature accepts an already-created Blueprint:

```ts
function generateReactQueryManifest(
  blueprint: Blueprint,
  options?: { source?: string },
): string
```

Experimental convenience functions prove the required inputs:

```ts
createBlueprintFromRawOpenApi(openapi, options?): Promise<Blueprint>
generateConnectManifest(): Promise<string>
generateManifestFromOpenApiFile(path, options?): Promise<string>
generateManifestFromOpenApiUrl(url, options?): Promise<string>
```

Files and URLs accept JSON or YAML through the same parser. The checked-in local
artifact combines `@seamapi/types/connect` with
`experimental/fixtures/branch-openapi.json` and explicitly uses
`omitUndocumented: false`. Consequently, the branch-only
`/experimental/widgets/get_branch_widget`, synthetic undocumented
`/experimental/widgets/internal_probe`, and Connect's undocumented
`/access_codes/get_timeline` endpoints are present.

## Endpoint type representation

`GeneratedEndpointTypes` is an interface keyed by literal API paths:

```ts
interface GeneratedEndpointTypes {
  '/experimental/widgets/get_branch_widget': {
    parameters: { branch_widget_id: string }
    result: ResourceBranchWidget
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
}
```

Resources are structural interfaces emitted once and referenced by endpoint
results. Lists use `Array<Resource>`. Void responses use `undefined`. Nested
objects, lists, enums, nullability, and optional properties are emitted
recursively. If Blueprint says parameters are required but provides no specific
required name, the generator uses a distributive `RequireAtLeastOne` helper.
This matches the existing HTTP client's broad behavior but cannot express every
cross-field OpenAPI constraint.

Hook path unions and parameter/result aliases are derived from this map rather
than from `SeamHttpEndpoints`. Runtime execution constructs the existing
`SeamHttpRequest`; it does not generate another HTTP client.

## `SeamHttpRequest` shortcomings found

- The constructor is public, but its parent/config interfaces are private. This
  makes generic manifest-driven construction possible but awkward to type.
- Action-attempt resolution takes another private structural interface. The
  experiment must discover `client.actionAttempts` at runtime.
- `SeamPaginator` hard-codes the response pagination key to `pagination`, even
  though the manifest carries Blueprint's pagination response key.
- `SeamPaginator` creates follow-up `SeamHttpRequest` instances without copying
  required-parameter or action-attempt metadata.
- `SeamHttpWithoutWorkspace` has no `createPaginator`, unlike generated endpoint
  clients and `SeamHttp`.
- The response envelope generic must be reconstructed around a runtime response
  key. A request factory accepting typed metadata would remove the local cast.

None of these shortcomings required a change to `@seamapi/http` for the branch
endpoint proof.

## Size and TypeScript observations

On this branch, the generated Connect-plus-fixture artifact is approximately
approximately 400 KB of formatted TypeScript. A minified ESM library build with
peer dependencies externalized is approximately **116 KB raw / 10.0 KB gzip**.
`npm run check:bundle` verifies that `@seamapi/blueprint`, `@seamapi/types`, YAML,
and OpenAPI/codegen dependencies are absent.

A warm `npm run typecheck` took about **3.1 seconds** in the experiment
container. The path-keyed map avoids indexing the very large concrete
`SeamHttpEndpoints` class and removes the former out-of-memory-motivated endpoint
casts. The generated structural resource types remain the dominant declaration
size; splitting runtime metadata from compile-time resource declarations should
be evaluated before a production move.

## Exit-gate result

The exit gate is met by the checked-in branch fixture and tests: a branch-only
endpoint loaded from raw OpenAPI is accepted by a typed `useSeamQuery` call and
executes through `SeamHttpRequest`, without modifying `@seamapi/http`.
Production movement remains explicitly out of scope for this draft experiment.
