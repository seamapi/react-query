import { expectTypeOf, test } from 'vitest'

import { useSeamMutation, useSeamQuery } from '@seamapi/react-query'

test('the generated endpoint map enforces paths and parameters', () => {
  const useCompileContract = (): void => {
    const query = useSeamQuery('/devices/get', { device_id: 'device-1' })
    expectTypeOf(query.data?.device_id).toEqualTypeOf<string | undefined>()

    const mutation = useSeamMutation('/devices/update')
    mutation.mutate({ device_id: 'device-1', name: 'Kitchen' })

    const branch = useSeamQuery('/experimental/widgets/get_branch_widget', {
      branch_widget_id: 'widget-1',
    })
    expectTypeOf(branch.data?.revision).toEqualTypeOf<number | undefined>()

    // This synthetic endpoint is x-undocumented in the raw fixture and is
    // present because the local artifact uses omitUndocumented: false.
    useSeamQuery('/experimental/widgets/internal_probe', {
      branch_widget_id: 'widget-1',
    })

    // @ts-expect-error Unknown endpoint paths are rejected.
    useSeamQuery('/not/a/real/endpoint')
    // @ts-expect-error Unknown request properties are rejected.
    useSeamQuery('/devices/get', { invented_parameter: true })
    // @ts-expect-error Required mutation parameters are enforced.
    mutation.mutate({ name: 'Missing device ID' })
    // @ts-expect-error Branch-only OpenAPI parameters are typed too.
    useSeamQuery('/experimental/widgets/get_branch_widget', {})
  }

  expectTypeOf(useCompileContract).toBeFunction()
})
