import type { JSX } from 'react'

import {
  SeamQueryProvider,
  useSeamMutation,
  useSeamQuery,
} from '@seamapi/react-query'

export function App(): JSX.Element {
  return (
    <SeamQueryProvider
      endpoint={import.meta.env.SEAM_ENDPOINT}
      publishableKey={import.meta.env.SEAM_PUBLISHABLE_KEY}
      userIdentifierKey={import.meta.env.SEAM_USER_IDENTIFIER_KEY}
    >
      <Locks />
    </SeamQueryProvider>
  )
}

function Locks(): JSX.Element {
  const locks = useSeamQuery('/locks/list')

  const lockDoor = useSeamMutation('/locks/lock_door', {
    waitForActionAttempt: true,
    onSuccess: async () => await locks.refetch(),
  })

  const unlockDoor = useSeamMutation('/locks/unlock_door', {
    waitForActionAttempt: true,
    onSuccess: async () => await locks.refetch(),
  })

  const error = locks.error ?? lockDoor.error ?? unlockDoor.error
  const isMutating = lockDoor.isPending || unlockDoor.isPending
  const getButtonLabel = (
    deviceId: string,
    isLocked: boolean | undefined,
  ): string => {
    if (lockDoor.isPending && lockDoor.variables.device_id === deviceId) {
      return 'Locking…'
    }
    if (unlockDoor.isPending && unlockDoor.variables.device_id === deviceId) {
      return 'Unlocking…'
    }
    if (isLocked == null) return 'Unknown'
    return isLocked ? 'Unlock' : 'Lock'
  }

  return (
    <main>
      <h1>Seam Query</h1>
      <h2>Locks</h2>
      {locks.isPending ? <p>Loading…</p> : null}
      {error == null ? null : <p role='alert'>{error.message}</p>}
      {locks.data?.length === 0 ? <p>No locks found.</p> : null}
      <ul>
        {locks.data?.map((device) => {
          const isLocked = device.properties.locked
          const canToggle = isLocked
            ? device.can_remotely_unlock
            : device.can_remotely_lock

          return (
            <li key={device.device_id}>
              {device.display_name}{' '}
              <button
                type='button'
                disabled={isLocked == null || canToggle !== true || isMutating}
                onClick={() => {
                  const mutation = isLocked ? unlockDoor : lockDoor
                  mutation.mutate({ device_id: device.device_id })
                }}
              >
                {getButtonLabel(device.device_id, isLocked)}
              </button>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
