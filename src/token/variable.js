import renderable from '../renderable';


function VariableToken(template) {
    var regex = /^{{\s*([\w\.]+)\s*}}/;
    var match = template.input.match(regex);
    if(match === null) return false;

    template.consume(match[0]);
    template.output.push(
        renderable(template.get(match[1]))
    );

    return true;
};

export default VariableToken;
