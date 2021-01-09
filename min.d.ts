interface Array<T> {
    /**
     * Returns the minimal of all elements in the array
     */
    min(): T | null;
    min(field: string): T | null;
    min(mapper: MapperFunc<T, Comparable>): T | null;
}
