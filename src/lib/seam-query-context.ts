import type { SeamHttp, SeamHttpEndpoints } from '@seamapi/http'
import { createContext, useContext } from 'react'

export interface SeamQueryContext {
  client: SeamHttp | null
  endpointClient: SeamHttpEndpoints | null
  clientOptions?: { endpoint?: string | undefined } | undefined
  publishableKey?: string | undefined
  userIdentifierKey?: string | undefined
  clientSessionToken?: string | undefined
  consoleSessionToken?: string | undefined
  workspaceId?: string | undefined
  queryKeyPrefix?: string | undefined
}

export const seamContext = createContext<SeamQueryContext>({
  client: null,
  endpointClient: null,
})

export function useSeamQueryContext(): SeamQueryContext {
  return useContext(seamContext)
}
