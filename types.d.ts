/**
 * Callback function type to retrieve value from objects
 */
export type MapperFunc<T, O> = (item: T) => O

// Extended Array prototype functions
interface Array<T> {
  /**
   * Returns the first element of the array
   */
  head(): T | null

  /**
   * Returns an array with all elements but the first element of the array
   */
  tail(): T[]

  /**
   * Returns the first element of the array
   */
  first(): T | null

  /**
   * Returns the last element of the array
   */
  last(): T | null

  /**
   * Returns the sum of all elements in the array
   */
  sum(fieldOrMapper: null | string | MapperFunc<T, O> = null): O | null

  /**
   * Returns the arithmetic average of all elements in the array
   */
  avg(fieldOrMapper: null | string | MapperFunc<T, O> = null): O | null

  /**
   * Returns a new array sorted by a field name
   */
  sortBy(fieldOrMapper: null | string | MapperFunc<T, O> = null, order: -1|1 = 1): O

  /**
   * Returns the minimal element of the array
   */
  min(fieldOrMapper: null | string | MapperFunc<T, O> = null): O | null

  /**
   * Returns the maximal element of the array
   */
  max(fieldOrMapper: null | string | MapperFunc<T, O> = null): O | null

  /**
   * Returns the median element of the array
   */
  median(fieldOrMapper: null | string | MapperFunc<T, O> = null): O | null

  /**
   * Returns an object whos keys are the 
   */
  groupBy(field: string): object

  /**
   * Returns a list with only unique elements in the list
   */
  uniq(fieldOrMapper: null | string | MapperFunc<T, O> = null): O[] | []
}
