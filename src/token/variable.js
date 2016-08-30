
var VariableToken = {
    regex: /^{{\s*(\w+)\s*}}/,
    match: function(template) {
        var match = template.input.match(this.regex);
        if(match === null) return false;

        template.consume(match[0]);
        template.output.push(template.get(match[1]));

        return true;
    }
};

export default VariableToken;
