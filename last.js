if (Array.prototype.last === undefined) {
    Array.prototype.last = function () {
        return this.length === 0 ? null : this[this.length - 1];
    };
}
