import Tokenizer from './tokenizer';

import VariableToken from './token/variable';
import ConditionalToken from './token/conditional';
import TextToken from './token/text';

var render = function(input, data) {
    var tokenizer = new Tokenizer([
        VariableToken,
        ConditionalToken,
        TextToken
    ]);
    var template  = tokenizer.run(input, data);
    return template.render();
}

export default render;
