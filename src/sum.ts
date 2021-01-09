interface Array<T> {
  /**
   * Returns the sum of all elements in the array
   */
  sum(): number
  sum(field: string): number
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
