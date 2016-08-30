


var renderable = function(data, meta) {
    return {
        data: data,
        meta: meta||{},
        render: function() {
            return this.data;
        }
    };
}

export default renderable;
