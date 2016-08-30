
var VariableToken = {
    regex: /^{{\s*(\w+)\s*}}/,
    match: function(template) {
        var match = template.input.match(this.regex);
        if(match === null) return;

        
    }
};

export default VariableToken;
