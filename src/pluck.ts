import './blank-module'

declare global {
  interface Array<T> {
    /**
     * Returns the average of all field values of elements in the array
     */
    pluck<O>(field: string): O[]
    /**
     * Returns the average of all values extracted from elements in the array by a mapper function
     */
    pluck<O>(mapper: (item: T) => O): O[]
  }
}

if (Array.prototype.pluck === undefined) {
  Array.prototype.pluck = function<T, O>(
    this: T[],
    fieldOrMapper: string | ((T) => O)
  ) {
    const mapper = typeof fieldOrMapper === 'function' ? fieldOrMapper : item => item[fieldOrMapper]
    return this.map(mapper)
  }
}
