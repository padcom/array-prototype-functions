export declare type SortOrder = 1 | -1;
export declare type Comparable = number | bigint | string;
export declare type MapperFunc<I, O extends Comparable> = (x: I) => O;
declare global {
    interface Array<T> {
        /**
         * Returns a sorted copy of the original array
         */
        sortBy(): T[];
        /**
         * Returns a sorted copy of the original array
         * with the option to select sorting order
         */
        sortBy(order: SortOrder): T[];
        /**
         * Returns a sorted copy of the original array by a given field
         * with the option to select sorting order
         */
        sortBy(field: string): T[];
        /**
         * Returns a sorted copy of the original array by a given field
         * with the option to select sorting order
         */
        sortBy(field: string, order: SortOrder): T[];
        /**
         * Returns a sorted copy of the original array by a value extracted using a function
         * with the option to select sorting order
         */
        sortBy(mapper: MapperFunc<T, Comparable>): T[];
        /**
         * Returns a sorted copy of the original array by a value extracted using a function
         * with the option to select sorting order
         */
        sortBy(mapper: MapperFunc<T, Comparable>, order: SortOrder): T[];
    }
}
