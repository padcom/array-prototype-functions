declare type SortOrder = 1 | -1;
declare type Comparable = number | bigint | string;
declare type MapperFunc<I, O extends Comparable> = (x: I) => O;
interface Array<T> {
    /**
     * Returns the sum of all elements in the array
     */
    sortBy<O>(): T[];
    sortBy<O>(order: SortOrder): T[];
    sortBy<O>(field: string): T[];
    sortBy<O>(field: string, order: SortOrder): T[];
    sortBy<O extends Comparable>(mapper: MapperFunc<T, Comparable>): T[];
    sortBy<O extends Comparable>(mapper: MapperFunc<T, Comparable>, order: SortOrder): T[];
}
