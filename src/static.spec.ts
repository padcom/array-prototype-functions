import './static'

describe('Static functions', () => {
  it('will create array by calling an initializer', () => {
    const values = Array.generate(2, idx => idx)
    expect(values).toEqual([ 0, 1 ])
  })
})
