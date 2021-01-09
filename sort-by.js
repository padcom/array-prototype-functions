if (Array.prototype.sortBy === undefined) {
    Array.prototype.sortBy = function (fieldOrMapperOrOrder = null, order = 1) {
        if (typeof fieldOrMapperOrOrder === 'number') {
            order = fieldOrMapperOrOrder;
            fieldOrMapperOrOrder = null;
        }
        return [...this].sort((a, b) => {
            if (typeof fieldOrMapperOrOrder === 'function') {
                return (fieldOrMapperOrOrder(a) - fieldOrMapperOrOrder(b)) * order;
            }
            else {
                return (fieldOrMapperOrOrder ? a[fieldOrMapperOrOrder] - b[fieldOrMapperOrOrder] : a - b) * order;
            }
        });
    };
}
