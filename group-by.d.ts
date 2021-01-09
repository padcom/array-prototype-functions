interface Array<T> {
    groupBy(field: string): {
        [key: string]: T[];
    };
}
