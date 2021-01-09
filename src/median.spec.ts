import './sort-by'
import './median'

describe('median', () => {
  it('will return median element', () => {
    expect([ 3, 2, 1 ].median()).toEqual(2)
  })

  it('will return null median element if array is empty', () => {
    expect([].median()).toBeNull()
  })

  it('will return median element by field', () => {
    expect([ { x: 3 }, { x: 2 }, { x: 1 } ].median('x')).toEqual({ x: 2 })
  })

  it('will return median element by extract function', () => {
    expect([ { x: 3 }, { x: 2 }, { x: 1 } ].median(item => item.x)).toEqual({ x: 2 })
  })
})
