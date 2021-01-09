interface Array<T> {
  /**
   * Returns the first element of the array
   */
  first(): T | null
}

if (Array.prototype.first === undefined) {
  Array.prototype.first = function<T>(this: T[]) {
    return this.length === 0 ? null : this[0]
  }
}
