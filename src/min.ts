interface Array<T> {
  /**
   * Returns the sum of all elements in the array
   */
  min(): T | null
  min<O>(field: string): O | null
  min<O extends Comparable>(mapper: MapperFunc<T, O>): O | null
}

if (Array.prototype.min === undefined) {
  Array.prototype.min = function<I, O extends Comparable>(
    fieldOrMapper: null | string | MapperFunc<I, O> = null
  ) {
    return this.sortBy(fieldOrMapper, 1).first()
  }
}
