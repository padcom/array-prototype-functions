interface Array<T> {
    /**
     * Returns an object with keys having lists of objects
     * containing the given field value
     *
     * @param field field to group by
     */
    groupBy(field: string): {
        [key: string]: T[];
    };
}
