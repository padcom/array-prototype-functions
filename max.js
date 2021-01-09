if (Array.prototype.max === undefined) {
    Array.prototype.max = function (fieldOrMapper = null) {
        return this.sortBy(fieldOrMapper, -1).first();
    };
}
