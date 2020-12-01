export const add = a => b => a + b
export const sub = a => b => a - b
export const div = a => b => a / b
export const mul = a => b => a * b
export const exp = a => b => a ** b

export const cases = forms => input => {
  for(let [predicate, body] of forms) {
    if(predicate(input))
      return body(input)
  }
  return false
}
