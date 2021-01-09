if (Array.prototype.max === undefined) {
    Array.prototype.max = function (fieldOrMapper = null) {
        // @ts-ignore
        return this.sortBy(fieldOrMapper, -1).first();
    };
}
export {};
