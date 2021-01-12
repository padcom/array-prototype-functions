import './pluck'

describe('Array.prototype.pluck', () => {
  it('will return field values', () => {
    expect([{ x: 1 }, { x: 2 }].pluck('x')).toEqual([1, 2])
  })

  it('will return transformed object', () => {
    const array = [{ int: { x: 1 }, y: 2 }, { int: { x: 3 }, y: 4 }]
    const expected = [{ x: 1, y: 2 }, { x: 3, y: 4 }]
    expect(array.pluck(item => ({ x: item.int.x, y: item.y}))).toEqual(expected)
  })

  it('will return empty objects if the items are not objects', () => {
    expect([1, 2, 3].pluck('x')).toEqual([undefined, undefined, undefined])
  })
})
