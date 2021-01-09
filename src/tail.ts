interface Array<T> {
  /**
   * Returns an array with all elements but the first element of the array
   */
  tail(): T[]
}

if (Array.prototype.tail === undefined) {
  Array.prototype.tail = function () {
    return [...this].splice(1)
  }
}
