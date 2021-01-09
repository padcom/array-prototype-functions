if (Array.prototype.sortBy === undefined) {
    Array.prototype.sortBy = function (fieldOrMapperOrOrder = null, order = 1) {
        if (typeof fieldOrMapperOrOrder === 'number') {
            order = fieldOrMapperOrOrder;
            fieldOrMapperOrOrder = null;
        }
        return [...this].sort((a, b) => {
            let va, vb;
            if (typeof fieldOrMapperOrOrder === 'function') {
                va = fieldOrMapperOrOrder(a);
                vb = fieldOrMapperOrOrder(b);
            }
            else {
                va = fieldOrMapperOrOrder ? a[fieldOrMapperOrOrder] : a;
                vb = fieldOrMapperOrOrder ? b[fieldOrMapperOrOrder] : b;
            }
            if (typeof va === 'string') {
                return va.localeCompare(vb) * order;
            }
            else {
                return (va - vb) * order;
            }
        });
    };
}
