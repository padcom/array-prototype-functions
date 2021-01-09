interface Array<T> {
  /**
   * Returns the sum of all elements in the array
   */
  avg(): T | null
  avg<O>(field: string): O | null
  avg<O>(mapper: MapperFunc<T, O>): O | null
}

if (Array.prototype.avg === undefined) {
  Array.prototype.avg = function<I, O>(
    fieldOrMapper: null | string | MapperFunc<I, O> = null
  ) {
    return this.length === 0 ? null : this.sum(fieldOrMapper) / this.length
  }
}
