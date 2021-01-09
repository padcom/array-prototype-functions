interface Array<T> {
  groupBy(field: string): { [key: string]: T[] }
}

if (Array.prototype.groupBy === undefined) {
  Array.prototype.groupBy = function<T>(
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
