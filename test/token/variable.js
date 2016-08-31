import {assert} from 'chai';

import Template from '../../src/template'
import VariableToken from '../../src/token/variable'

describe('token/variable', () => {
    describe('#match', function() {
        it('replaces {{ var }} with variable from template data', () => {
            var template = new Template('{{ something }}', {something: 123});
            
            assert.isTrue(VariableToken(template));

            assert.equal(template.render(), '123');
        }); 
        it('works with path variables', () => {
            var template = new Template('{{ foo.bar.baz }}', {foo: {bar: {baz: 123}}});
            
            assert.isTrue(VariableToken(template));

            assert.equal(template.render(), '123');
        }); 
    });
});
