import './tail'

describe('tail', () => {
  it('will get the tail of an array', () => {
    expect([1, 2, 3].tail()).toEqual([2, 3])
  })

  it('will return empty array if array is empty for the tail of an array', () => {
    expect([].tail()).toEqual([])
  })
})
