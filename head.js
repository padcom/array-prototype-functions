if (Array.prototype.head === undefined) {
    Array.prototype.head = function () {
        return this.length === 0 ? null : this[0];
    };
}
