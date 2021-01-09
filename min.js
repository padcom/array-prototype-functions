if (Array.prototype.min === undefined) {
    Array.prototype.min = function (fieldOrMapper = null) {
        return this.sortBy(fieldOrMapper, 1).first();
    };
}
