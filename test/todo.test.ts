import test from 'ava'

import { todo } from '@seamapi/react-query'

test('todo: returns argument', (t) => {
  t.is(todo('todo'), 'todo', 'returns input')
})
