
import Tokenizer from '../tokenizer';
import Template from '../template';

import findBlock from '../find-block'
import renderable from '../renderable';

var ConditionalToken = {
    start: function() {
        return /{{@\s*(\w+)\s*}}/g;
    },
    end: function() {
        return /{{@}}/g;
    },

    match: function(template, tokenizer) {
        tokenizer = tokenizer || new Tokenizer();

        var match = this.start().exec(template.input);
        if(match === null || match.index != 0){
            return false;
        }

        var block = findBlock(template.input, this.start(), this.end());
        
        var inputArray = template.get(block.open[1]);
        template.consume(block.raw);
        
        if(!Array.isArray(inputArray)){
            return true;
        }
        
        for(var i = 0; i < inputArray.length; i++){
            var innerTemplate = tokenizer.run(block.inner, inputArray[i]);
            template.output.push(innerTemplate);
        }


        return true;
    }
};

export default ConditionalToken;
