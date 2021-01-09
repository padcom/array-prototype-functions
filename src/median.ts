interface Array<T> {
  /**
   * Returns the median of all elements in the array
   */
  median(): T | null
  median(field: string): T | null
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
