import './last'

describe('Array.prototype.last', () => {
  it('will return last item of an array', () => {
    expect([ 1, 2, 3 ].last()).toEqual(3)
  })

  it('will return null if array is empty for the last item of an array', () => {
    expect([].last()).toBeNull()
  })

  it('will return an empty array if the original array was empty', () => {
    expect([].last(2)).toEqual([])
  })

  it('will return last n elements of the array', () => {
    expect([1, 2, 3].last(2)).toEqual([2, 3])
  })

  it('will return all elements of the array if n > array.length', () => {
    expect([1, 2, 3].last(5)).toEqual([1, 2, 3])
  })

  it('will not modify the original array', () => {
    const original = [1, 2, 3]
    original.last(2)
    expect(original).toEqual([1, 2, 3])
  })
})
