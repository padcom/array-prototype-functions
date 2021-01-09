interface Array<T> {
    /**
     * Returns a list of unique values
     */
    uniq(): T;
    uniq<O>(field: string): O[];
    uniq<O extends Comparable>(mapper: MapperFunc<T, O>): O[];
}
