interface Array<T> {
  /**
   * Returns the sum of all elements in the array
   */
  max(): T | null
  max<O>(field: string): O | null
  max<O extends Comparable>(mapper: MapperFunc<T, O>): O | null
}

if (Array.prototype.max === undefined) {
  Array.prototype.max = function<I, O extends Comparable>(
    fieldOrMapper: null | string | MapperFunc<I, O> = null
  ) {
    return this.sortBy(fieldOrMapper, -1).first()
  }
}
