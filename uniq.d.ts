interface Array<T> {
    uniq(): T;
    uniq<O>(field: string): O;
    uniq<O>(mapper: MapperFunc<T, O>): O;
}
