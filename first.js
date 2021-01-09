import './blank-module';
if (Array.prototype.first === undefined) {
    Array.prototype.first = function () {
        return this.length === 0 ? null : this[0];
    };
}
