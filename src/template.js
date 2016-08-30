import get from './property-access';

/**
 * @constructor
 * @param {string} input  
 * @param {object} data
 */
var Template = function(input, data) {
    this.input  = input;
    this.data = data || {};
    this.output = [];
};

Template.prototype.get = function(path) {
    return get(this.data, path);
};

Template.prototype.render = function() {
    var buffer = '';
    this.output.forEach(function(renderable) {
        buffer += renderable.render(); 
    });
    return buffer;
};

/**
 * Removes n characters from start of input
 * @param  {number|string} n number of chars to remove (or string.length)
 * @return {this}
 */
Template.prototype.consume = function(n) {
    // normalize n to a number
    var n = (typeof n === "string") ? n.length : n;
    this.input = this.input.substr(n);
    return this;
};


export default Template;
