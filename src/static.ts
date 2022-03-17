export type InitCallback<T> = (index: number) => T|null

declare global {
  interface ArrayConstructor {
    /**
     * Generate an array of length n and initialize all elements
     * using the init callback
     */
    generate<T>(length: number, init: InitCallback<T>): (T|null)[]
  }
}

Array.generate = function<T>(length, init: InitCallback<T> = index => null) {
  return Array.apply(null, { length }).map(Function.call, init)
}
