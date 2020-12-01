import {B} from './combinators.js'
import {concat, fold, join, map, slice} from './array.js'

export const cons = fun => xs => Array.from(xs, fun)
export const car = xs => xs[0]
export const cdr = slice(1)(undefined)
export const cadr = B(car)(cdr)

const byChunk = n => (acc, _, i, ary) =>
  (i % n) ? acc : [...acc, slice(i)(i + n)(ary)]

export const chunk = n => fold([])(byChunk(n))
export const flatten = xs => fold([])((acc, x) => concat(acc)(x))(xs)
export const last = B(car)(slice(-1)()) // NOTE xs[xs.length - 1]
export const push = x => xs => [...xs, x] // NOTE same as concat?
export const partition = predicate => // NOTE mutating, how to fix?
  fold
    ([[], []])
    ((acc, x) =>
      (acc[predicate(x) ? 0 : 1].push(x), acc))

export const repeat = n => by => join(by)(Array(n + 1))
export const zip = xs => map((x, i) => [xs[i], x])
