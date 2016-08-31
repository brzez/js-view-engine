import {assert} from 'chai';

import renderable from '../src/renderable'

describe('renderable', () => {
    it('returns an object w/ render method', () => {
        var o = renderable('potato');

        assert.equal(o.render(), 'potato');
    });
});
