import renderable from '../renderable';

var TextToken = function(template) {
    var regex = /^[\s\S]/;
    var match = template.input.match(regex);
    if(match === null) return;

    template.consume(match[0]);
    template.output.push(renderable(match[0]));

    return true;
};

export default TextToken;
