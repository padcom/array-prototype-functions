interface Array<T> {
    /**
     * Returns the average value of all elements in the array
     */
    avg(): T | null;
    avg(field: string): number | null;
    avg(mapper: MapperFunc<T, number>): number | null;
}
