import { Comparable, MapperFunc } from './sort-by';
declare global {
    interface Array<T> {
        /**
         * Returns the median of all elements in the array
         */
        median(): T | null;
        /**
         * Returns the median of all elements in the array by the given field
         */
        median(field: string): T | null;
        /**
         * Returns the median of all elements in the array by values extracted from the object
         * using an mapper function
         */
        median(mapper: MapperFunc<T, Comparable>): T | null;
    }
}
