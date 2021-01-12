import './blank-module'

declare global {
  interface Array<T> {
    /**
     * Returns the first element of the array
     */
    first(): T | null
    /**
     * Returns the first n elements of the array
     */
    first(n: number): T[]
  }
}

if (Array.prototype.first === undefined) {
  Array.prototype.first = function<T>(
    this: T[],
    n: number | null = null
  ) {
    if (n === null) {
      return this.length === 0 ? null : this[0]
    } else {
      return [...this].splice(0, n)
    }
  }
}
