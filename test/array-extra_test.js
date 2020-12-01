import * as curried from '../array.js'
import {idxSucc, sum} from './common_test.js'
import {assertEquals} from 'https://deno.land/std/testing/asserts.ts'

Deno.test('car', () => {
  assertEquals(undefined, curried.car([]))
  assertEquals(1, curried.car([1, 2, 3]))
  assertEquals('a', curried.car('abc'))
})

Deno.test('cadr', () => {
  assertEquals(undefined, curried.cadr([]))
  assertEquals(2, curried.cadr([1, 2, 3]))
})

Deno.test('cdr', () => {
  assertEquals([], curried.cdr([]))
  assertEquals([2, 3], curried.cdr([1, 2, 3]))
  assertEquals(['b', 'c'], curried.cdr('abc'))
})

Deno.test('chunk', () => {
  assertEquals([[1], [2], [3]], curried.chunk(1)([1, 2, 3]))
})

Deno.test('cons', () => {
  assertEquals([1, 2, 3], curried.cons(idxSucc)([0, 1, 2]))
})

Deno.test('flatten', () => {
  assertEquals([1, 2, 3], curried.flatten([1, [2, 3]]))
})

Deno.test('last', () => {
  assertEquals(3, curried.last([1, 2, 3]))
})

Deno.test('partition', () => {
  assertEquals([[2, 3], [1]], curried.partition(n => n > 1)([1, 2, 3]))
})

Deno.test('push', () => {
  assertEquals([1, 2, 3], curried.push(3)([1, 2]))
})

Deno.test('zip', () => {
  assertEquals([[0, 1], [1, 2], [2, 3]], curried.zip([0, 1, 2])([1, 2, 3]))
})
