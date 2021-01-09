interface Array<T> {
  /**
   * Returns the sum of all elements in the array
   */
  max(): T | null
  max(field: string): T | null
  max(mapper: MapperFunc<T, Comparable>): T | null
}

if (Array.prototype.max === undefined) {
  Array.prototype.max = function<T>(
    this: T[],
    fieldOrMapper: null | string | MapperFunc<T, Comparable> = null
  ) {
    // @ts-ignore
    return this.sortBy(fieldOrMapper, -1).first()
  }
}
