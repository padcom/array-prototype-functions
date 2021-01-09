interface Array<T> {
  /**
   * Returns the first element of the array
   */
  head(): T | null
}

if (Array.prototype.head === undefined) {
  Array.prototype.head = function<T>(this: T[]) {
    return this.length === 0 ? null : this[0]
  }
}
