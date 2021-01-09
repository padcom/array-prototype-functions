import './blank-module'

declare global {
  interface Array<T> {
    /**
     * Returns the last element of the array
     */
    last(): T | null
  }
}

if (Array.prototype.last === undefined) {
  Array.prototype.last = function<T>(this: T[]) {
    return this.length === 0 ? null : this[this.length - 1]
  }
}
