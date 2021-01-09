import './first'
import './sort-by'
import './min'

describe('Array.prototype.min', () => {
  it('will return min element', () => {
    expect([ 3, 1, 2 ].min()).toEqual(1)
  })

  it('will return null min element if array is empty', () => {
    expect([].min()).toBeNull()
  })

  it('will return min element by field', () => {
    expect([ { x: 1 }, { x: 2 }, { x: 3 } ].min('x')).toEqual({ x: 1 })
  })

  it('will return min element by extract function', () => {
    expect([ { x: 1 }, { x: 2 }, { x: 3 } ].min(item => item.x)).toEqual({ x: 1 })
  })
})
