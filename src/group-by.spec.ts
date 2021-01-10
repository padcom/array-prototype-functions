import './group-by'

describe('Array.prototype.groupBy', () => {
  it('will group objects by field', () => {
    const array = [ { x: 1, y: 2 }, { x: 1, y: 4 }, { x: 5, y: 6 } ]
    const expected = {
      1: [ { x: 1, y: 2 }, { x: 1, y: 4 } ],
      5: [ { x: 5, y: 6 } ]
    }

    expect(array.groupBy('x')).toEqual(expected)
  })

  it('will skip objects without the field', () => {
    const array = [ { x: 1, y: 2 }, { y: 3 } ]
    const expected = {
      1: [ { x: 1, y: 2 } ]
    }

    expect(array.groupBy('x')).toEqual(expected)
  })

  it('will throw an error when no field is given', () => {
    expect(() => [].groupBy('')).toThrow('Need a field to group by')
  })
})
