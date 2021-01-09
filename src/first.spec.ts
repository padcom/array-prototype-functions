import './first'

describe('Array.prototype.first', () => {
  it('will get the first of an array', () => {
    expect([1, 2, 3].first()).toEqual(1)
  })

  it('will return null if array is empty for the head of an array', () => {
    expect([].first()).toBeNull()
  })
})
