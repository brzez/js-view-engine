
/**
 * @constructor
 * @param {string} input  
 * @param {object} params
 */
var Template = function(input, params) {
    this.input  = input;
    this.params = params || {};
    this.output = [];
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
