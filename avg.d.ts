interface Array<T> {
    /**
     * Returns the sum of all elements in the array
     */
    avg(): T | null;
    avg<O>(field: string): O | null;
    avg<O extends Comparable>(mapper: MapperFunc<T, O>): O | null;
}
