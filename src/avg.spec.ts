import './sum'
import './avg'

describe('avg', () => {
  it('will avg numbers', () => {
    expect([1, 2, 3].avg()).toEqual(2)
  })

  it('will avg value by field', () => {
    expect([{ x: 1 }, { x: 2 }, { x: 3 }].avg<number>('x')).toEqual(2)
  })

  it('will avg by extract function', () => {
    expect([{ x: 1 }, { x: 2 }, { x: 3 }].avg(item => item.x)).toEqual(2)
  })

  it('will return null avg for empty array', () => {
    expect([].avg()).toBeNull()
  })
})
