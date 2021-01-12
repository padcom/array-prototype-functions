import './first'

describe('Array.prototype.first', () => {
  it('will get the first of an array', () => {
    expect([1, 2, 3].first()).toEqual(1)
  })

  it('will return null if array is empty for the head of an array', () => {
    expect([].first()).toBeNull()
  })

  it('will return an empty array if the original array was empty', () => {
    expect([].first(2)).toEqual([])
  })

  it('will return first n elements of the array', () => {
    expect([1, 2, 3].first(2)).toEqual([1, 2])
  })

  it('will return all elements of the array if n > array.length', () => {
    expect([1, 2, 3].first(5)).toEqual([1, 2, 3])
  })

  it('will not modify the original array', () => {
    const original = [1, 2, 3]
    original.first(2)
    expect(original).toEqual([1, 2, 3])
  })
})
