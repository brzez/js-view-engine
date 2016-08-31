
import Tokenizer from '../tokenizer';
import Template from '../template';

import findBlock from '../find-block'
import renderable from '../renderable';

var ConditionalToken = {
    start: /{{#\s*(\w+)\s*}}/g,
    end: /{{#}}/g,

    match: function(template, tokenizer) {
        tokenizer = tokenizer || new Tokenizer();

        var match = this.start.exec(template.input);
        if(match === null || match.index != 0){
            return false;
        }

        this.start.lastIndex = this.end.lastIndex = 0;

        var block = findBlock(template.input, this.start, this.end);
        
        var condition = template.get(block.open[1]);

        template.consume(block.raw);

        var innerTemplate = tokenizer.run(condition ? block.inner : '', template.data);
        
        template.output.push(innerTemplate);

        return true;
    }
};

export default ConditionalToken;
