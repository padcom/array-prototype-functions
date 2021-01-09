interface Array<T> {
  uniq(): T
  uniq<O>(field: string): O
  uniq<O extends Comparable>(mapper: MapperFunc<T, O>): O
}

if (Array.prototype.uniq === undefined) {
  Array.prototype.uniq = function<I, O extends Comparable>(
    fieldOrMapper: null | string | MapperFunc<I, O> = null
  ) {
    return [...new Set(this.map(item => {
      if (typeof fieldOrMapper === 'function') {
        return fieldOrMapper(item)
      } else {
        return fieldOrMapper ? item[fieldOrMapper] : item
      }
    }))]
  }
}
