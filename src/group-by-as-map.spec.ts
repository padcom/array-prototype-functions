import './group-by-as-map'

describe('Array.prototype.groupBy', () => {
  it('will group objects by field', () => {
    const array = [ { x: '1', y: 2 }, { x: 1, y: 3 }, { x: 1, y: 4 }, { x: 5, y: 6 } ]
    const expected = new Map<any, { x: any, y: number }[]>([
      [ '1', [ { x: '1', y: 2 } ] ],
      [ 1, [ { x: 1, y: 3 }, { x: 1, y: 4 } ] ],
      [ 5, [ { x: 5, y: 6 } ] ]
    ])

    expect(array.groupByAsMap('x')).toEqual(expected)
  })

  it('will group objects by mapper function', () => {
    const array = [ { x: '1', y: 2 }, { x: 1, y: 3 }, { x: 1, y: 4 }, { x: 5, y: 6 } ]
    const expected = new Map<any, { x: any, y: number }[]>([
      [ '1', [ { x: '1', y: 2 } ] ],
      [ 1, [ { x: 1, y: 3 }, { x: 1, y: 4 } ] ],
      [ 5, [ { x: 5, y: 6 } ] ]
    ])

    expect(array.groupByAsMap(item => item.x)).toEqual(expected)
  })

  it('will skip objects without the field', () => {
    const array = [ { x: 1, y: 2 }, { y: 3 } ]
    const expected = new Map<any, { x: any, y: number }[]>([
      [ 1, [ { x: 1, y: 2 } ] ]
    ])

    expect(array.groupByAsMap('x')).toEqual(expected)
  })

  it('will throw an error when no field is given', () => {
    expect(() => [].groupByAsMap('')).toThrow('Need a field to group by')
  })
})
