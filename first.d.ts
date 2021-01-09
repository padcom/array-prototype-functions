import './blank-module';
declare global {
    interface Array<T> {
        /**
         * Returns the first element of the array
         */
        first(): T | null;
    }
}
