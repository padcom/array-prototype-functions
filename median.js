if (Array.prototype.median === undefined) {
    Array.prototype.median = function (fieldOrMapper = null) {
        if (this.length === 0)
            return null;
        const midIndex = Math.floor(this.length / 2);
        // @ts-ignore
        return this.sortBy(fieldOrMapper)[midIndex];
    };
}
