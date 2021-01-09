interface Array<T> {
  /**
   * Returns the minimal of all elements in the array
   */
  min(): T | null
  min(field: string): T | null
  min(mapper: MapperFunc<T, Comparable>): T | null
}

if (Array.prototype.min === undefined) {
  Array.prototype.min = function<T>(
    this: T[],
    fieldOrMapper: null | string | MapperFunc<T, Comparable> = null
  ) {
    // @ts-ignore
    return this.sortBy(fieldOrMapper, 1).first()
  }
}
