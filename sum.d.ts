interface Array<T> {
    /**
     * Returns the sum of all elements in the array
     */
    sum(): T | null;
    sum<O>(field: string): O | null;
    sum<O extends Comparable>(mapper: MapperFunc<T, O>): O | null;
}
