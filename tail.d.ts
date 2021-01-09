import './blank-module';
declare global {
    interface Array<T> {
        /**
         * Returns an array with all elements but the first element of the array
         */
        tail(): T[];
    }
}
