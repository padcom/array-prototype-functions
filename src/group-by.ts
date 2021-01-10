import './blank-module'

declare global {
  interface Array<T> {
    /**
     * Returns an object with keys having lists of objects
     * containing the given field value
     * 
     * @param field field to group by
     */
    groupBy(field: string): { [key: string]: T[] }
    /**
     * Returns an object with keys having lists of objects
     * containing the given field value
     * 
     * @param field field to group by
     */
    groupBy(mapper: (item: T) => string): { [key: string]: T[] }
  }
}

if (Array.prototype.groupBy === undefined) {
  Array.prototype.groupBy = function<T>(
    this: T[],
    fieldOrMapper: string | ((item: T) => string)
  ) {
    if (!fieldOrMapper) {
      throw new Error('Need a field to group by')
    }

    const result = {}
    this.forEach(item => {
      const value = typeof fieldOrMapper === 'function' ? fieldOrMapper(item) : item[fieldOrMapper]
      if (value !== undefined) {
        if (result[value] === undefined) result[value] = []
        result[value].push(item)
      }
    })
    return result
  }
}
