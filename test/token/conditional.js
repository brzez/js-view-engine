import {assert} from 'chai';

import Template from '../../src/template'
import ConditionalToken from '../../src/token/conditional'

describe('token/conditional', () => {
    describe('#match', function() {
        it('renders if condition is true', function() {
            var template = new Template('{{# foo }}wololo{{#}}', {foo: true});

            assert.isTrue(ConditionalToken.match(template));
            assert.equal(template.render(), 'wololo');
        })
        it('doesnt render if condition is false', function() {
            var template = new Template('{{# foo }}wololo{{#}}', {foo: false});

            assert.isTrue(ConditionalToken.match(template));
            assert.equal(template.render(), '');
        })
    });
});
