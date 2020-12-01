import {builtin} from './common.js'
import {assign, pluck} from './object.js'

export const getId = id =>
  builtin
    (Document.prototype.getElementById)
    (document, id) // FIXME juggle out `document`

// Note function is implemented in the following, and checks for class:
// Document | DocumentFragment | Element
export const query = from => selector =>
  from.querySelector(selector)

export const queryAll = from => selector =>
  from.querySelectorAll(selector)

export const prepend = parent => child =>
  (builtin
    (Node.prototype.insertBefore)
    (child, parent.firstChild)
  , parent)

export const append = parent => child =>
  (builtin
    (Node.prototype.appendChild)
    (parent, child)
  , parent)

export const listen = eventType => listenable => fun => // XXX: order?
  builtin
    (EventTarget.prototype.addEventListener)
    (listenable, eventType, fun)

export const onLoad = listen('DOMContentLoaded')
export const onChange = listen('change')
export const onInput = listen('input')
export const onClick = listen('click')
export const onSubmit = listen('submit')

export const dispatch = eventType => listenable =>
  builtin
    (EventTarget.prototype.dispatchEvent)
    (listenable, eventType)

export const elem = name =>
  assign
    (builtin
      (Document.prototype.createElement)
      (document, name)) // FIXME juggle out `document`
