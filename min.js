if (Array.prototype.min === undefined) {
    Array.prototype.min = function (fieldOrMapper = null) {
        // @ts-ignore
        return this.sortBy(fieldOrMapper, 1).first();
    };
}
export {};
