import './blank-module';
declare global {
    interface Array<T> {
        /**
         * Returns the last element of the array
         */
        last(): T | null;
    }
}
