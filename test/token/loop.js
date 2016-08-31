import {assert} from 'chai';

import Template from '../../src/template'
import Tokenizer from '../../src/tokenizer'
import LoopToken from '../../src/token/loop'
import VariableToken from '../../src/token/variable'
import TextToken from '../../src/token/text'

describe('token/loop', () => {
    describe('#match', function() {
        var tokenizer = new Tokenizer([VariableToken, TextToken]);

        it('renders elements in array', function() {
            var template = new Template('{{@ things}}{{name}}{{@}}', {things: [
                {name: 'Foo'},
                {name: 'Bar'},
                {name: 'Baz'},
            ]});

            assert.isTrue(LoopToken.match(template, tokenizer));
            assert.equal(template.render(), 'FooBarBaz');
        });
        it('shouldnt render anything if not an array', function() {
            var template = new Template('{{@ things}}pancake?{{@}}', {things: "pancakes"});

            assert.isTrue(LoopToken.match(template, tokenizer));
            assert.equal(template.render(), '');
        });
    });
});
