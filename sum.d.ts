interface Array<T> {
    /**
     * Returns the sum of all elements in the array
     */
    sum(): number;
    sum(field: string): number;
    sum(mapper: MapperFunc<T, number>): number;
}
