declare type SortOrder = 1 | -1;
declare type Comparable = any | number | bigint;
declare type MapperFunc<I, O extends any | number | bigint> = (x: I) => O;
interface Array<T> {
    /**
     * Returns the sum of all elements in the array
     */
    sortBy<O>(): T[];
    sortBy<O>(order: SortOrder): T[];
    sortBy<O>(field: string): T[];
    sortBy<O>(field: string, order: SortOrder): T[];
    sortBy<O>(mapper: MapperFunc<T, Comparable>): T[];
    sortBy<O>(mapper: MapperFunc<T, Comparable>, order: SortOrder): T[];
}
