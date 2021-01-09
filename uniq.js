if (Array.prototype.uniq === undefined) {
    Array.prototype.uniq = function (fieldOrMapper = null) {
        return [...new Set(this.map(item => {
                if (typeof fieldOrMapper === 'function') {
                    return fieldOrMapper(item);
                }
                else {
                    return fieldOrMapper ? item[fieldOrMapper] : item;
                }
            }))];
    };
}
