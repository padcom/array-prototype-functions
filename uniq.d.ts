interface Array<T> {
    uniq(): T;
    uniq<O>(field: string): O;
    uniq<O extends Comparable>(mapper: MapperFunc<T, O>): O;
}
