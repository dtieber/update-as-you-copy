import { clone } from 'ramda'

export function update<T>(original: T, updateFun: (obj: T) => void): T {
  const copy = clone(original)
  updateFun(copy)
  return copy
}
