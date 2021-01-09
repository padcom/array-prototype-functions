import './blank-module';
if (Array.prototype.groupBy === undefined) {
    Array.prototype.groupBy = function (field) {
        if (!field) {
            throw new Error('Need a field to group by');
        }
        return this.reduce((acc, item) => {
            if (acc[item[field]])
                acc[item[field]].push(item);
            else
                acc[item[field]] = [item];
            return acc;
        }, {});
    };
}
