import {assert} from 'chai';

import Template from '../../src/template'
import Tokenizer from '../../src/tokenizer'
import ConditionalToken from '../../src/token/conditional'
import VariableToken from '../../src/token/variable'

describe('token/conditional', () => {
    describe('#match', function() {
        var tokenizer = new Tokenizer([VariableToken]);

        it('renders if condition is true', function() {
            var template = new Template('{{# foo }}{{content}}{{/}}', {foo: true, content: 'wololo'});

            assert.isTrue(ConditionalToken(template, tokenizer));
            assert.equal(template.render(), 'wololo');
        })
        it('renders if condition is false but negated', function() {
            var template = new Template('{{#! foo }}{{content}}{{/}}', {foo: false, content: 'wololo'});

            assert.isTrue(ConditionalToken(template, tokenizer));
            assert.equal(template.render(), 'wololo');
        })
        it('renders if condition is true and negated', function() {
            var template = new Template('{{#! foo }}{{content}}{{/}}', {foo: true, content: 'wololo'});

            assert.isTrue(ConditionalToken(template, tokenizer));
            assert.equal(template.render(), '');
        })
        it('doesnt render if condition is false', function() {
            var template = new Template('{{# foo }}wololo{{/}}', {foo: false});

            assert.isTrue(ConditionalToken(template));
            assert.equal(template.render(), '');
        })
    });
});
