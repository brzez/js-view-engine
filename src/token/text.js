import renderable from '../renderable';

var TextToken = {
    regex: /^[\s\S]/, // todo: it should eat more than 1 letter
    match: function(template) {
        var match = template.input.match(this.regex);
        if(match === null) return;

        template.consume(match[0]);
        template.output.push(renderable(match[0], {token: 'text'}));

        return true;
    }
};

export default TextToken;
