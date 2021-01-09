import { MapperFunc } from './sort-by';
declare global {
    interface Array<T> {
        /**
         * Returns the sum of all elements in the array
         */
        sum(): number;
        /**
         * Returns the sum of all field values of elements in the array
         */
        sum(field: string): number;
        /**
         * Returns the sum of all values extracted from elements in the array by a mapper function
         */
        sum(mapper: MapperFunc<T, number>): number;
    }
}
