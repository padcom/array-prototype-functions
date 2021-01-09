declare type SortOrder = 1 | -1;
declare type Comparable = number | bigint | string;
declare type MapperFunc<I, O extends Comparable> = (x: I) => O;
interface Array<T> {
    /**
     * Returns a sorted copy of the original array
     */
    sortBy(): T[];
    sortBy(order: SortOrder): T[];
    sortBy(field: string): T[];
    sortBy(field: string, order: SortOrder): T[];
    sortBy(mapper: MapperFunc<T, Comparable>): T[];
    sortBy(mapper: MapperFunc<T, Comparable>, order: SortOrder): T[];
}
