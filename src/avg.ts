interface Array<T> {
  /**
   * Returns the average value of all elements in the array
   */
  avg(): number | null
  /**
   * Returns the average of all field values of elements in the array
   */
  avg(field: string): number | null
  /**
   * Returns the average of all values extracted from elements in the array by a mapper function
   */
  avg(mapper: MapperFunc<T, number>): number | null
}

if (Array.prototype.avg === undefined) {
  Array.prototype.avg = function<T>(
    this: T[],
    fieldOrMapper: null | string | MapperFunc<T, number> = null
  ) {
    if (this.length === 0) {
      return null
    } else {
      // @ts-ignore
      return this.sum(fieldOrMapper) / this.length
    }
  }
}
