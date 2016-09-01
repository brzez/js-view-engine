import {assert} from 'chai';

import Template from '../../src/template'
import TextToken from '../../src/token/text'

describe('token/text', () => {
    describe('#match', function() {
        it('adds a text token to template if matched', () => {
            var text = 'bananana\n\nasd';

            var template = new Template(text);
            
            while(TextToken(template));

            assert.equal(template.render(), text);
        }); 
    });
});
