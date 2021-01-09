interface Array<T> {
    /**
     * Returns the sum of all elements in the array
     */
    max(): T | null;
    max<O>(field: string): O | null;
    max<O>(mapper: MapperFunc<T, O>): O | null;
}
