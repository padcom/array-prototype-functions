interface Array<T> {
  /**
   * Returns the sum of all elements in the array
   */
  sum(): T | null
  sum<O>(field: string): O | null
  sum<O extends Comparable>(mapper: MapperFunc<T, O>): O | null
}

if (Array.prototype.sum === undefined) {
  Array.prototype.sum = function<I, O extends Comparable>(
    fieldOrMapper: null | string | MapperFunc<I, O> = null
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
