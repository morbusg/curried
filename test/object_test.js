import * as curried from '../object.js'
import {assertEquals} from 'https://deno.land/std/testing/asserts.ts'

Deno.test('isType', () => {
  assertEquals(true, curried.isType('Object')({}))
  assertEquals(true, curried.isType('Array')([]))
})

Deno.test('pluck', () => {
  assertEquals('bar', curried.pluck('foo')({foo: 'bar'}))
})
