if (Array.prototype.avg === undefined) {
    Array.prototype.avg = function (fieldOrMapper = null) {
        if (this.length === 0) {
            return null;
        }
        else {
            // @ts-ignore
            return this.sum(fieldOrMapper) / this.length;
        }
    };
}
export {};
