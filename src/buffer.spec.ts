import './buffer'

describe('Array.prototype.pushUInt8', () => {
  it('will add a byte to array', () => {
    const original = [1, 2, 3]
    original.pushUInt8(4)
    expect(original).toEqual([1, 2, 3, 4])
  })
  it('will add a big number as byte to array', () => {
    const original = [1, 2, 3]
    original.pushUInt8(Number.MAX_SAFE_INTEGER)
    expect(original).toEqual([1, 2, 3, 255])
  })
})

describe('Array.prototype.pushUInt16', () => {
  it('will add a word to array', () => {
    const original = [1, 2, 3]
    original.pushUInt16(2**16 - 1)
    expect(original).toEqual([1, 2, 3, 255, 255])
  })
  it('will add a big number as word to array', () => {
    const original = [1, 2, 3]
    original.pushUInt16(Number.MAX_SAFE_INTEGER)
    expect(original).toEqual([1, 2, 3, 255, 255])
  })
})

describe('Array.prototype.pushUInt32', () => {
  it('will add a dword to array', () => {
    const original = [1, 2, 3]
    original.pushUInt32(2**32 - 1)
    expect(original).toEqual([1, 2, 3, 255, 255, 255, 255])
  })
  it('will add a big number as dword to array', () => {
    const original = [1, 2, 3]
    original.pushUInt32(Number.MAX_SAFE_INTEGER)
    expect(original).toEqual([1, 2, 3, 255, 255, 255, 255])
  })
})

describe('Array.prototype.pushFloat', () => {
  it('will add a float to array', () => {
    const original = [1, 2, 3]
    original.pushFloat(1234.5678)
    expect(original).toEqual([1, 2, 3, 43, 82, 154, 68])
  })
})

describe('Array.prototype.pushString', () => {
  it('will add a string to array', () => {
    const original = [1, 2, 3]
    original.pushString('Hello')
    expect(original).toEqual([1, 2, 3, 72, 101, 108, 108, 111])
  })
})

describe('Array.prototype.pushString0', () => {
  it('will add a zero-terminated string to array', () => {
    const original = [1, 2, 3]
    original.pushString0('Hello')
    expect(original).toEqual([1, 2, 3, 72, 101, 108, 108, 111, 0])
  })
})
