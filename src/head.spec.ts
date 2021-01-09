import './head'

describe('Array.prototype.head', () => {
  it('will get the head of an array', () => {
    expect([1, 2, 3].head()).toEqual(1)
  })

  it('will return null if array is empty for the head of an array', () => {
    expect([].head()).toBeNull()
  })
})
