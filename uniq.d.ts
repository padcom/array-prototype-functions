import { Comparable, MapperFunc } from './sort-by';
declare global {
    interface Array<T> {
        /**
         * Returns a list of unique values
         */
        uniq(): T;
        /**
         * Returns a list of unique values of a given object field
         */
        uniq<O>(field: string): O[];
        /**
         * Returns a list of unique values of a field extracted from the objects using a mapper function
         */
        uniq<O extends Comparable>(mapper: MapperFunc<T, O>): O[];
    }
}
