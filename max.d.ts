import { Comparable, MapperFunc } from './sort-by';
declare global {
    interface Array<T> {
        /**
         * Returns the max value of all elements in the array
         */
        max(): T | null;
        /**
         * Returns the max value of all elements in the array by the given field
         */
        max(field: string): T | null;
        /**
         * Returns the max value of all elements in the array by values extracted from the object
         * using an mapper function
         */
        max(mapper: MapperFunc<T, Comparable>): T | null;
    }
}
