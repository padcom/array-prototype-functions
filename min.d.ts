interface Array<T> {
    /**
     * Returns the sum of all elements in the array
     */
    min(): T | null;
    min<O>(field: string): O | null;
    min<O>(mapper: MapperFunc<T, O>): O | null;
}
