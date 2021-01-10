import { MapperFunc, Comparable } from './sort-by'

declare global {
  interface Array<T> {
    /**
     * Returns a Map with keys having lists of objects
     * containing the given field value
     * 
     * @param field field to group by
     */
    groupByAsMap(field: string): Map<any, T[]>
    /**
     * Returns a Map with keys having lists of objects
     * containing the given field value
     * 
     * @param field field to group by
     */
    groupByAsMap<K>(mapper: (item: T) => K): Map<K, T[]>
  }
}

if (Array.prototype.groupByAsMap === undefined) {
  Array.prototype.groupByAsMap = function<T, K>(
    this: T[],
    fieldOrMapper: string | ((item: T) => K)
  ) {
    if (!fieldOrMapper) {
      throw new Error('Need a field to group by')
    }

    const result = new Map<any, T[]>()
    this.forEach((item: T) => {
      const value = typeof fieldOrMapper === 'function' ? fieldOrMapper(item) : item[fieldOrMapper]
      if (value !== undefined) {
        if (!result.has(value)) result.set(value, [])
        result.get(value)?.push(item)
      }
    })
    return result
  }
}
