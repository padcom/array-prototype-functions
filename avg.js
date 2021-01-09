if (Array.prototype.avg === undefined) {
    Array.prototype.avg = function (fieldOrMapper = null) {
        return this.length === 0 ? null : this.sum(fieldOrMapper) / this.length;
    };
}
