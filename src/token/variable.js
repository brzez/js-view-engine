import renderable from '../renderable';


var VariableToken = function(template) {
    var regex = /^{{\s*([\w\.]+)\s*}}/;
    var match = template.input.match(regex);
    if(match === null) return false;

    template.consume(match[0]);
    template.output.push(
        renderable(template.get(match[1]), {token: 'variable'})
    );

    return true;
};

export default VariableToken;
