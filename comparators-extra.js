import {B} from './combinators.js'
import {eq} from './comparators.js'
import {lnot} from './logical.js'
import {and} from './bitwise.js'

export const isEven = B(eq(0))(and(1))
export const isOdd = B(lnot)(isEven)
