import './uniq'

describe('Array.prototype.uniq', () => {
  it('will return just unique elements', () => {
    expect([ 1, 1, 1, 2, 2, 3 ].uniq()).toEqual([ 1, 2, 3 ])
  })

  it('will return just unique elements for field', () => {
    expect([ { x: 1 }, { x: 1 }, { x: 1 }, { x: 2 }, { x: 2 }, { x: 3 } ].uniq('x')).toEqual([ 1, 2, 3 ])
  })

  it('will return just unique elements for extract function', () => {
    expect([ { x: 1 }, { x: 1 }, { x: 1 }, { x: 2 }, { x: 2 }, { x: 3 } ].uniq(item => item.x)).toEqual([ 1, 2, 3 ])
  })
})
