interface Array<T> {
    /**
     * Returns the sum of all elements in the array
     */
    max(): T | null;
    max(field: string): T | null;
    max(mapper: MapperFunc<T, Comparable>): T | null;
}
