import './group-by'

describe('Array.prototype.groupBy', () => {
  it('will group objects by field', () => {
    expect([ { x: 1, y: 2 }, { x: 1, y: 4 }, { x: 5, y: 6 } ].groupBy('x')).toEqual({
      1: [ { x: 1, y: 2 }, { x: 1, y: 4 } ],
      5: [ { x: 5, y: 6 } ]
    })
  })

  it('will throw an error when no field is given', () => {
    expect(() => [].groupBy('')).toThrow('Need a field to group by')
  })
})
