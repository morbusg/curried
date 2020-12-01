import {builtin} from './common.js'

export const split = by => xs =>
  builtin(String.prototype.split)(xs, by)

export const replace = re => f  => x =>
  builtin(String.prototype.replace)(x, re, f)

export const match = re => str =>
  builtin(String.prototype.match)(str, re)

export const substr = start => end => xs =>
  builtin(String.prototype.slice)(xs, start, end)
