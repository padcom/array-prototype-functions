import './blank-module';
if (Array.prototype.tail === undefined) {
    Array.prototype.tail = function () {
        return [...this].splice(1);
    };
}
