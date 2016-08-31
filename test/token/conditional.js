import {assert} from 'chai';

import Template from '../../src/template'
import Tokenizer from '../../src/tokenizer'
import ConditionalToken from '../../src/token/conditional'
import VariableToken from '../../src/token/variable'

describe('token/conditional', () => {
    describe('#match', function() {
        var tokenizer = new Tokenizer([VariableToken]);

        it('renders if condition is true', function() {
            var template = new Template('{{# foo }}{{content}}{{#}}', {foo: true, content: 'wololo'});

            assert.isTrue(ConditionalToken.match(template, tokenizer));
            assert.equal(template.render(), 'wololo');
        })
        it('doesnt render if condition is false', function() {
            var template = new Template('{{# foo }}wololo{{#}}', {foo: false});

            assert.isTrue(ConditionalToken.match(template));
            assert.equal(template.render(), '');
        })
    });
});
