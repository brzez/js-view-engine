import Template from './template';

var render = function(input, data) {
    var template = new Template(input, data);
    var tokenizers = [
        {
            trigger: /^./,
            match: function(template) {
                var matched = template.input.match(this.trigger);
                template.consume(matched[0]);
                template.output.push(matched[0]);
            }
        }
    ];

    for(let i=0; i < tokenizers.length; i++){
        var tokenizer = tokenizers[i];
        if(template.input.match(tokenizer.trigger)){
            return tokenizer.match(template);
        }
    }
}

export default render;
