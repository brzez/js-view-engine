import {assert} from 'chai';

import get from '../src/property-access'

describe('property-access', () => {
  describe('#get', function() {
    it('returns a value for one level path', () => {
        var object = {
            foo: '123'
        };
        var result = get(object, 'foo');
        assert.equal(result, '123');
    });
    
    it('returns a value for 3 level path', () => {
        var object = {
            foo: {
                bar: {
                    baz: '123'
                }
            }
        };
        var result = get(object, 'foo.bar.baz');
        assert.equal(result, '123');
    });
    
    it('returns undefined if property not found', () => {
        assert.equal(get({}, 'foo'), undefined);
        assert.equal(get({}, 'foo.bar'), undefined);
        assert.equal(get({}, 'foo.bar.baz'), undefined);
    });

  });
});
