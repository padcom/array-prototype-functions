interface Array<T> {
    /**
     * Returns the sum of all elements in the array
     */
    median(): T | null;
    median<O>(field: string): O | null;
    median<O extends Comparable>(mapper: MapperFunc<T, O>): O | null;
}
