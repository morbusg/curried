export const I = x => x
export const K = a => b => a
export const B = f => g => a => f(g(a)) // compose
export const C = f => a => b => f(b)(a) // exchange
export const S = f => g => a => f(a)(g(a)) // fuse
export const M = f => f(f)
export const T = C(I) // hold
export const V = B(C)(T) // hold pair
export const W = f => g => f(g(g)) // XXX: using M?

export const KI = K(I)
export const CB = C(B)
