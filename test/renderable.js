import {assert} from 'chai';

import renderable from '../src/renderable'

describe('renderable', () => {
    it('returns an object w/ render method, data and (optional) meta properties', () => {
        var o = renderable('potato', {a: 1});

        assert.equal(o.data, 'potato');
        assert.equal(o.render(), 'potato');
        assert.equal(o.meta.a, 1);
    });
    it('meta is optional', () => {
        var o = renderable('potato');
        assert.typeOf(o.meta, 'object');
    });
});
