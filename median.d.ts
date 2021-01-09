interface Array<T> {
    /**
     * Returns the median of all elements in the array
     */
    median(): T | null;
    median(field: string): T | null;
    median(mapper: MapperFunc<T, Comparable>): T | null;
}
