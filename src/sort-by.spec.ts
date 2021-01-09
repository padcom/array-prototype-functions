import './sort-by'

describe('Array.prototype.sortBy', () => {
  it('will sort numbers', () => {
    expect([1, 2, 3].sortBy()).toEqual([1, 2, 3])
  })

  it('will sort numbers in reverse', () => {
    expect([1, 2, 3].sortBy(-1)).toEqual([3, 2, 1])
  })

  it('will sort by field', () => {
    expect([{ x: 1 }, { x: 2 }, { x: 3 }].sortBy('x')).toEqual([ { x: 1 }, { x: 2 }, { x: 3 }])
  })

  it('will sort by field in reverse', () => {
    expect([{ x: 1 }, { x: 2 }, { x: 3 }].sortBy('x', -1)).toEqual([ { x: 3 }, { x: 2 }, { x: 1 }])
  })

  it('will sort objects by extract function', () => {
    expect([{ x: 1 }, { x: 2 }, { x: 3 }].sortBy(item => item.x)).toEqual([ { x: 1 }, { x: 2 }, { x: 3 }])
  })

  it('will sort objects by extract function in reverse', () => {
    expect([{ x: 1 }, { x: 2 }, { x: 3 }].sortBy(item => item.x, -1)).toEqual([ { x: 3 }, { x: 2 }, { x: 1 }])
  })
})
