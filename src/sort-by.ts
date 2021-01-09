type SortOrder = 1 | -1
type Comparable = number | bigint | string
type MapperFunc<I, O extends Comparable> = (x: I) => O

interface Array<T> {
  /**
   * Returns a sorted copy of the original array
   */
  sortBy(): T[]
  /**
   * Returns a sorted copy of the original array
   * with the option to select sorting order
   */
  sortBy(order: SortOrder): T[]
  /**
   * Returns a sorted copy of the original array by a given field
   * with the option to select sorting order
   */
  sortBy(field: string): T[]
  /**
   * Returns a sorted copy of the original array by a given field
   * with the option to select sorting order
   */
  sortBy(field: string, order: SortOrder): T[]
  /**
   * Returns a sorted copy of the original array by a value extracted using a function
   * with the option to select sorting order
   */
  sortBy(mapper: MapperFunc<T, Comparable>): T[]
  /**
   * Returns a sorted copy of the original array by a value extracted using a function
   * with the option to select sorting order
   */
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
