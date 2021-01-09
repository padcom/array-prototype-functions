interface Array<T> {
  /**
   * Returns the median of all elements in the array
   */
  median(): T | null
  /**
   * Returns the median of all elements in the array by the given field
   */
  median(field: string): T | null
  /**
   * Returns the median of all elements in the array by values extracted from the object
   * using an mapper function
   */
  median(mapper: MapperFunc<T, Comparable>): T | null
}

if (Array.prototype.median === undefined) {
  Array.prototype.median = function<T>(
    this: T[],
    fieldOrMapper: null | string | MapperFunc<T, Comparable> = null
  ) {
    if (this.length === 0) return null

    const midIndex = Math.floor(this.length / 2)
    // @ts-ignore
    return this.sortBy(fieldOrMapper)[midIndex]
  }
}
