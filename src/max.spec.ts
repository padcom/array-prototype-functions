import './first'
import './sort-by'
import './max'

describe('Array.prototype.max', () => {
  it('will return max element', () => {
    expect([ 3, 1, 2 ].max()).toEqual(3)
  })

  it('will return null max element if array is empty', () => {
    expect([].max()).toBeNull()
  })

  it('will return max element by field', () => {
    expect([ { x: 3 }, { x: 1 }, { x: 2 } ].max('x')).toEqual({ x: 3 })
  })

  it('will return max element by extract function', () => {
    expect([ { x: 3 }, { x: 1 }, { x: 2 } ].max(item => item.x)).toEqual({ x: 3 })
  })
})
