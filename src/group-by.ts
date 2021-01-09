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
  }
}

if (Array.prototype.groupBy === undefined) {
  Array.prototype.groupBy = function<T>(
    this: T[],
    field: string
  ) {
    if (!field) {
      throw new Error('Need a field to group by')
    }
    return this.reduce((acc, item) => {
      if (acc[item[field]]) acc[item[field]].push(item)
      else acc[item[field]] = [item]
      return acc
    }, {})
  }
}
