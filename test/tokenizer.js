import {assert} from 'chai';

import Tokenizer from '../src/tokenizer'
import Template from '../src/template'

import VariableToken from '../src/token/variable'
import TextToken from '../src/token/text'

var makeTokenizer = function() {
    return new Tokenizer([VariableToken, TextToken]);
}

describe('Tokenizer', () => {
    describe('#clone', function() {
        it('should return a cloned tokenizer instance', function() {
            var tokenizer = makeTokenizer();
            var cloned = tokenizer.clone(); 
            assert.instanceOf(cloned, Tokenizer);
            assert(cloned !== tokenizer);
            assert(cloned.tokens !== tokenizer.tokens)
        });
    });
    describe('#run', function() {
        it('should return a Template', function() {
            var tokenizer = makeTokenizer();
            var result = tokenizer.run('thing', {}); 
            assert.instanceOf(result, Template);
        });
        it('should run tokens on the template', function() {
            var tokenizer = makeTokenizer();
            var template  = tokenizer.run('{{foo}}bar', {foo: 'foo'}); 
            assert.equal(template.render(), 'foobar')
        });
    });
});
