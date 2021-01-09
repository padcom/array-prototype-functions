interface Array<T> {
  /**
   * Returns the sum of all elements in the array
   */
  sum(): number
  /**
   * Returns the sum of all field values of elements in the array
   */
  sum(field: string): number
  /**
   * Returns the sum of all values extracted from elements in the array by a mapper function
   */
  sum(mapper: MapperFunc<T, number>): number
}

if (Array.prototype.sum === undefined) {
  Array.prototype.sum = function<T>(
    this: T[],
    fieldOrMapper: null | string | MapperFunc<T, number> = null
  ) {
    return this.reduce((acc, item) => {
      if (typeof fieldOrMapper === 'function') {
        return acc + fieldOrMapper(item)
      } else {
        return acc + (fieldOrMapper !== null ? item[fieldOrMapper] : item)
      }
    }, 0)
  }
}
