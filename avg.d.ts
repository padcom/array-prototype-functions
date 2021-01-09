interface Array<T> {
    /**
     * Returns the sum of all elements in the array
     */
    avg(): T | null;
    avg<O>(field: string): O | null;
    avg<O>(mapper: MapperFunc<T, O>): O | null;
}
