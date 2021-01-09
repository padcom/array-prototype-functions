interface Array<T> {
    /**
     * Returns the minimal of all elements in the array
     */
    min(): T | null;
    /**
     * Returns the minimal value of all elements in the array by the given field
     */
    min(field: string): T | null;
    /**
     * Returns the minimal value of all elements in the array by values extracted from the object
     * using an mapper function
     */
    min(mapper: MapperFunc<T, Comparable>): T | null;
}
