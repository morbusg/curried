import {B, CB} from './combinators.js'
import {builtin} from './common.js'
import {eq} from './comparators.js'
import {fold} from './array.js'
import {split, substr} from './string.js'

export const assign = to => from => Object.assign(to, from)
export const typeOf = B(substr(8)(-1))(builtin(Object.prototype.toString))
export const isType = B(CB(typeOf))(eq)
export const pluck = prop => obj =>
  fold(obj)((acc, x) => acc[x])(split('.')(String(prop)))
