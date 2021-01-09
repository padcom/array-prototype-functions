import './sum'

describe('Array.prototype.sum', () => {
  it('will sum numbers', () => {
    expect([1, 2, 3].sum()).toEqual(6)
  })

  it('will sum objects by field', () => {
    expect([{ x: 1 }, { x: 2 }, { x: 3 }].sum<number>('x')).toEqual(6)
  })

  it('will sum objects by extract function', () => {
    expect([{ x: 1 }, { x: 2 }, { x: 3 }].sum(item => item.x)).toEqual(6)
  })

  it('will return zero sum for empty array', () => {
    expect([].sum()).toEqual(0)
  })
})
