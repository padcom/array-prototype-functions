type SortOrder = 1 | -1
type Comparable = any | number | bigint
type MapperFunc<I, O extends any|number|bigint> = (x: I) => O

interface Array<T> {
  /**
   * Returns the sum of all elements in the array
   */
  sortBy<O>(): T[]
  sortBy<O>(order: SortOrder): T[]
  sortBy<O>(field: string): T[]
  sortBy<O>(field: string, order: SortOrder): T[]
  sortBy<O>(mapper: MapperFunc<T, Comparable>): T[]
  sortBy<O>(mapper: MapperFunc<T, Comparable>, order: SortOrder): T[]
}

if (Array.prototype.sortBy === undefined) {
  Array.prototype.sortBy = function<I, O>(
    fieldOrMapperOrOrder: null | SortOrder | string | MapperFunc<I, Comparable> = null,
    order: SortOrder = 1
  ) {
    if (typeof fieldOrMapperOrOrder === 'number') {
      order = fieldOrMapperOrOrder
      fieldOrMapperOrOrder = null
    }
    return [...this].sort((a, b) => {
      if (typeof fieldOrMapperOrOrder === 'function') {
        return (fieldOrMapperOrOrder(a) - fieldOrMapperOrOrder(b)) * order
      } else {
        return (fieldOrMapperOrOrder ? a[fieldOrMapperOrOrder] - b[fieldOrMapperOrOrder] : a - b) * order
      }
    })
  }
}
