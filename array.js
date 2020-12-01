import {builtin} from './common.js'

export const flatMap = fun => iterable =>
  builtin(Array.prototype.flatMap)(iterable, fun)

export const fold = to => fun => iterable =>
  builtin(Array.prototype.reduce)(iterable, fun, to)

export const map = fun => iterable =>
  builtin(Array.prototype.map)(iterable, fun)

export const concat = xs => bs =>
  builtin(Array.prototype.concat)(xs, bs)

export const slice = start => end => iterable =>
  builtin(Array.prototype.slice)(iterable, start, end)

export const each = fun => iterable =>
  builtin(Array.prototype.forEach)(iterable, fun)

export const has = x => iterable =>
  builtin(Array.prototype.includes)(iterable, x, 0)

export const some = predicate => iterable =>
  builtin(Array.prototype.some)(iterable, predicate)

export const find = predicate => iterable =>
  builtin(Array.prototype.find)(iterable, predicate)

export const join = by => iterable =>
  builtin(Array.prototype.join)(iterable, by)

export const select = predicate => iterable =>
  builtin(Array.prototype.filter)(iterable, predicate)

export const sort = comparator => iterable => // NOTE mutating
  builtin(Array.prototype.sort)(iterable, comparator)
