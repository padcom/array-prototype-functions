type SortOrder = 1 | -1
type Comparable = number | bigint | string
type MapperFunc<I, O extends Comparable> = (x: I) => O

interface Array<T> {
  /**
   * Returns a sorted copy of the original array
   */
  sortBy(): T[]
  sortBy(order: SortOrder): T[]
  sortBy(field: string): T[]
  sortBy(field: string, order: SortOrder): T[]
  sortBy(mapper: MapperFunc<T, Comparable>): T[]
  sortBy(mapper: MapperFunc<T, Comparable>, order: SortOrder): T[]
}

if (Array.prototype.sortBy === undefined) {
  Array.prototype.sortBy = function<T, O extends Comparable>(
    this: T[],
    fieldOrMapperOrOrder: null | SortOrder | string | MapperFunc<T, Comparable> = null,
    order: SortOrder = 1
  ) {
    if (typeof fieldOrMapperOrOrder === 'number') {
      order = fieldOrMapperOrOrder
      fieldOrMapperOrOrder = null
    }
    return [...this].sort((a, b) => {
      let va, vb
      if (typeof fieldOrMapperOrOrder === 'function') {
        va = fieldOrMapperOrOrder(a)
        vb = fieldOrMapperOrOrder(b)
      } else {
        va = fieldOrMapperOrOrder ? a[fieldOrMapperOrOrder] : a
        vb = fieldOrMapperOrOrder ? b[fieldOrMapperOrOrder] : b
      }
      if (typeof va === 'string') {
        return va.localeCompare(vb) * order
      } else {
        return (va - vb) * order
      }
    })
  }
}
