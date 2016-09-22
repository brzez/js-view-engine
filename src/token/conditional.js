
import Tokenizer from '../tokenizer';
import Template from '../template';

import findBlock from '../find-block'
import renderable from '../renderable';

import defaultClosingTag from './default-closing-tag';

function ConditionalToken(template, tokenizer) {
    var start = function() {
        return /{{#(!)?\s*([\w\.]+)\s*}}/g;
    };
    tokenizer = tokenizer || new Tokenizer();

    var match = start().exec(template.input);
    if(match === null || match.index != 0){
        return false;
    }

    var block = findBlock(template.input, start(), defaultClosingTag());
    
    var condition = template.get(block.open[2]);
    // negation
    if(block.open[1]){
        condition = !condition;
    }
    template.consume(block.raw);

    if(!condition){
        return true;
    }

    var innerTemplate = tokenizer.run(block.inner, template.data);
    
    template.output.push(innerTemplate);

    return true;
};

export default ConditionalToken;
