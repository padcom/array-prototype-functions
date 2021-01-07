require('./index.js')

describe('Array prototype augmentation functions', () => {
  describe('head', () => {
    it('will get the head of an array', () => {
      expect([1, 2, 3].head()).toEqual(1)
    })

    it('will return null if array is empty for the head of an array', () => {
      expect([].first()).toBeNull()
    })
  })

  describe('head', () => {
    it('will get the first item of an array', () => {
      expect([1, 2, 3].first()).toEqual(1)
    })

    it('will return null if array is empty for the first item of an array', () => {
      expect([].first()).toBeNull()
    })
  })

  describe('tail', () => {
    it('will get the tail of an array', () => {
      expect([1, 2, 3].tail()).toEqual([2, 3])
    })

    it('will return empty array if array is empty for the tail of an array', () => {
      expect([].tail()).toEqual([])
    })
  })

  describe('sum', () => {
    it('will sum numbers', () => {
      expect([1, 2, 3].sum()).toEqual(6)
    })

    it('will sum objects by field', () => {
      expect([{ x: 1 }, { x: 2 }, { x: 3 }].sum('x')).toEqual(6)
    })

    it('will sum objects by extract function', () => {
      expect([{ x: 1 }, { x: 2 }, { x: 3 }].sum(item => item.x)).toEqual(6)
    })

    it('will return zero sum for empty array', () => {
      expect([].sum()).toEqual(0)
    })
  })

  describe('avg', () => {
    it('will avg numbers', () => {
      expect([1, 2, 3].avg()).toEqual(2)
    })

    it('will avg value by field', () => {
      expect([{ x: 1 }, { x: 2 }, { x: 3 }].avg('x')).toEqual(2)
    })

    it('will avg by extract function', () => {
      expect([{ x: 1 }, { x: 2 }, { x: 3 }].avg(item => item.x)).toEqual(2)
    })

    it('will return null avg for empty array', () => {
      expect([].avg()).toBeNull()
    })
  })

  describe('sortBy', () => {
    it('will sort numbers', () => {
      expect([1, 2, 3].sortBy()).toEqual([1, 2, 3])
    })

    it('will sort numbers in reverse', () => {
      expect([1, 2, 3].sortBy(null, -1)).toEqual([3, 2, 1])
    })

    it('will sort by field', () => {
      expect([{ x: 1 }, { x: 2 }, { x: 3 }].sortBy('x')).toEqual([ { x: 1 }, { x: 2 }, { x: 3 }])
    })

    it('will sort by field in reverse', () => {
      expect([{ x: 1 }, { x: 2 }, { x: 3 }].sortBy('x', -1)).toEqual([ { x: 3 }, { x: 2 }, { x: 1 }])
    })

    it('will sort objects by extract function', () => {
      expect([{ x: 1 }, { x: 2 }, { x: 3 }].sortBy(item => item.x)).toEqual([ { x: 1 }, { x: 2 }, { x: 3 }])
    })

    it('will sort objects by extract function in reverse', () => {
      expect([{ x: 1 }, { x: 2 }, { x: 3 }].sortBy(item => item.x, -1)).toEqual([ { x: 3 }, { x: 2 }, { x: 1 }])
    })
  })

  describe('min', () => {
    it('will return min element', () => {
      expect([ 3, 1, 2 ].min()).toEqual(1)
    })

    it('will return null min element if array is empty', () => {
      expect([].min()).toBeNull()
    })

    it('will return min element by field', () => {
      expect([ { x: 1 }, { x: 2 }, { x: 3 } ].min('x')).toEqual({ x: 1 })
    })

    it('will return min element by extract function', () => {
      expect([ { x: 1 }, { x: 2 }, { x: 3 } ].min(item => item.x)).toEqual({ x: 1 })
    })
  })

  describe('max', () => {
    it('will return max element', () => {
      expect([ 3, 1, 2 ].max()).toEqual(3)
    })

    it('will return null max element if array is empty', () => {
      expect([].max()).toBeNull()
    })

    it('will return max element by field', () => {
      expect([ { x: 3 }, { x: 1 }, { x: 2 } ].max('x')).toEqual({ x: 3 })
    })

    it('will return mAx element by extract function', () => {
      expect([ { x: 3 }, { x: 1 }, { x: 2 } ].max(item => item.x)).toEqual({ x: 3 })
    })
  })

  describe('median', () => {
    it('will return median element', () => {
      expect([ 3, 2, 1 ].median()).toEqual(2)
    })

    it('will return null median element if array is empty', () => {
      expect([].median()).toBeNull()
    })

    it('will return median element by field', () => {
      expect([ { x: 3 }, { x: 2 }, { x: 1 } ].median('x')).toEqual({ x: 2 })
    })

    it('will return median element by extract function', () => {
      expect([ { x: 3 }, { x: 2 }, { x: 1 } ].median(item => item.x)).toEqual({ x: 2 })
    })
  })

  describe('groupBy', () => {
    it('will group objects by field', () => {
      expect([ { x: 1, y: 2 }, { x: 1, y: 4 }, { x: 5, y: 6 } ].groupBy('x')).toEqual({
        1: [ { x: 1, y: 2 }, { x: 1, y: 4 } ],
        5: [ { x: 5, y: 6 } ]
      })
    })
  })

  describe('uniq', () => {
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
})
