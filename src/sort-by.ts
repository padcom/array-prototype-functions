type SortOrder = 1 | -1
type Comparable = number | bigint | string
type MapperFunc<I, O extends Comparable> = (x: I) => O

interface Array<T> {
  /**
   * Returns the sum of all elements in the array
   */
  sortBy<O>(): T[]
  sortBy<O>(order: SortOrder): T[]
  sortBy<O>(field: string): T[]
  sortBy<O>(field: string, order: SortOrder): T[]
  sortBy<O extends Comparable>(mapper: MapperFunc<T, Comparable>): T[]
  sortBy<O extends Comparable>(mapper: MapperFunc<T, Comparable>, order: SortOrder): T[]
}

if (Array.prototype.sortBy === undefined) {
  Array.prototype.sortBy = function<I, O extends Comparable>(
    fieldOrMapperOrOrder: null | SortOrder | string | MapperFunc<I, Comparable> = null,
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
