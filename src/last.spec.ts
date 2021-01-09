import './last'

describe('Array.prototype.last', () => {
  it('will return last item of an array', () => {
    expect([ 1, 2, 3 ].last()).toEqual(3)
  })

  it('will return null if array is empty for the last item of an array', () => {
    expect([].last()).toBeNull()
  })
})
