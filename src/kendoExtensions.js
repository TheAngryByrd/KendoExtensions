kendo.data.DataSource.prototype.kx =function() {
    return {
        DataSource: this,
        filter: function () {
            var filters = [];
            if (this.DataSource.filter() != undefined) {
                filters = this.DataSource.filter().filters;
            }
            return filters;
        },
        addFilter: function (filter) {
            var filters = this.filter();
            filters.push(filter);
            this.DataSource.filter(filters);
        },
        removeFilter: function (filter) {
            var filters = this.filter();

            filters = _(filters).reject(function (f) {
                return f.Id == filter.Id;
            });

            this.DataSource.filter(filters);
        },
        containsFilter: function (filterId) {
            var filters = this.filter();
            return _(_(filters).pluck("Id")).contains(filterId);
        }
    }

};


kendo.data.ObservableArray.prototype.kx = function () {
    return {
        ObservableArray: this,
        sort: function (sortFunction) {
            Array.prototype.sort.call(this.ObservableArray, sortFunction);
        },
        reverse: function () {
            Array.prototype.reverse.call(this.ObservableArray);
        }

    };
};