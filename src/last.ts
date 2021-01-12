import './blank-module'

declare global {
  interface Array<T> {
    /**
     * Returns the last element of the array
     */
    last(): T | null
    /**
     * Returns the last element of the array
     */
    last(n: number): T[]
  }
}

if (Array.prototype.last === undefined) {
  Array.prototype.last = function<T>(
    this: T[],
    n: number | null = null
  ) {
    if (n === null) {
      return this.length === 0 ? null : this[this.length - 1]
    } else {
      const firstIndex = n >= this.length ? 0 : this.length - n
      return [...this].splice(firstIndex, n)
    }
  }
}
