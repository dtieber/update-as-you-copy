import { update } from '../update'

export function Foo():any {}


describe('update', () => {
  it('clones and updates an object', () => {
    const foo = {
      prop1: 'val1',
      prop2: 2,
      nested: {
        prop3: 'prop3',
        prob4: false
      }
    }

    const updatedFoo = update(foo, (clonedFoo) => {
      clonedFoo.prop1 = 'newVal'
    })

    expect(updatedFoo.prop1).toEqual('newVal')
    expect(updatedFoo).not.toEqual(foo)
  })
})
