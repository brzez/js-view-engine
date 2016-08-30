import {assert} from 'chai';

import findBlock from '../src/find-block'

describe('find-block', () => {
    describe('#findBlock', function() {
        it('should return matched text (raw)', function() {
            var text   = 'START x STARTlalala\n\nleleleEND y END';
            var result = findBlock(text, /START/g, /END/g);
            assert.equal(result.raw, text);    
        });
        it('should return matched text (inner)', function() {
            var text   = 'START x STARTlalala\n\nleleleEND y END';
            var result = findBlock(text, /START/g, /END/g);
            assert.equal(result.inner, ' x STARTlalala\n\nleleleEND y ');    
        });
    });
});
