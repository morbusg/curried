import * as curried from '../array.js' 
import {idxSucc, sum} from './common_test.js'
import {assertEquals} from 'https://deno.land/std/testing/asserts.ts'

Deno.test('concat', () => {
  assertEquals([1, 2, 3], curried.concat([1, 2])([3]))
  assertEquals([1, 2, 3], curried.concat([1, 2])(3))
})

Deno.test('each', () => {
  let retval = [0, 1, 2]
  assertEquals(undefined, curried.each((n, i) => retval[i] = n + 1)(retval))
  assertEquals([1, 2, 3], retval)
})

Deno.test('find', () => {
  assertEquals(1, curried.find(idxSucc)([1, 2, 3]))
})

Deno.test('fold', () => {
  assertEquals(0, curried.fold(0)(sum)([]))
  assertEquals(6, curried.fold(0)(sum)([1, 2, 3]))
})

Deno.test('has', () => {
  assertEquals(true, curried.has('a')('abc'))
  assertEquals(true, curried.has(1)([1, 2, 3]))
  assertEquals(false, curried.has(0)([1, 2, 3]))
})

Deno.test('join', () => {
  assertEquals('1-2-3', curried.join('-')([1, 2, 3]))
})

Deno.test('map', () => {
  assertEquals([1, 2, 3], curried.map(idxSucc)([0, 1, 2]))
})

Deno.test('select', () => {
  assertEquals([1, 2, 3], curried.select(idxSucc)([1, 2, 3]))
  assertEquals([1, 2, 3], curried.select(sum)([1, 2, 3]))
})

Deno.test('slice', () => {
  assertEquals([1, 2], curried.slice(0)(2)([1, 2, 3]))
})

Deno.test('some', () => {
  assertEquals(true, curried.some(idxSucc)([1, 2, 3]))
})
