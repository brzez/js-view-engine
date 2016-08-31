
/*
    Should:
        match tokens from [] on template
        if token matches - start matching from the [] again (to preserve token order)
 */

import Template from './template'

var Tokenizer = function(tokens) {
    this.tokens = tokens || [];
}

Tokenizer.prototype.clone = function() {
    return new Tokenizer(this.tokens.slice());
};

Tokenizer.prototype.run = function(input, data) {
    var template = new Template(input, data);

    var tokenize = () => {
        for(var i = 0; i < this.tokens.length; i++){
            var token = this.tokens[i];
            if(token(template, this)){
                return true;       
            }
        }
        return false;
    }
    while(tokenize());

    return template;
};

export default Tokenizer;
