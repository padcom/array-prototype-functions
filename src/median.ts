interface Array<T> {
  /**
   * Returns the sum of all elements in the array
   */
  median(): T | null
  median<O>(field: string): O | null
  median<O>(mapper: MapperFunc<T, O>): O | null
}

if (Array.prototype.median === undefined) {
  Array.prototype.median = function<I, O>(
    fieldOrMapper: null | string | MapperFunc<I, O> = null
  ) {
    if (this.length === 0) return null

    const midIndex = Math.floor(this.length / 2)
    return this.sortBy(fieldOrMapper)[midIndex]
  }
}
