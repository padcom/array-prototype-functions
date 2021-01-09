if (Array.prototype.sum === undefined) {
    Array.prototype.sum = function (fieldOrMapper = null) {
        return this.reduce((acc, item) => {
            if (typeof fieldOrMapper === 'function') {
                return acc + fieldOrMapper(item);
            }
            else {
                return acc + (fieldOrMapper !== null ? item[fieldOrMapper] : item);
            }
        }, 0);
    };
}
export {};
