import {assert} from 'chai';

import Template from '../src/template'

describe('template', () => {
  describe('.input', function() {

    it('stores input', function() {
        var template = new Template('banana', {});
        assert.equal(template.input, 'banana');
    });

  });
  describe('.consume', function() {
    it('consumes number of chars from input', function() {
        var template = new Template('1234567890', {});
        template.consume(4);
        assert.equal(template.input, '567890');
    });
    it('consumes string length of chars from input', function() {
        var template = new Template('1234567890', {});
        template.consume('1234');
        assert.equal(template.input, '567890');
    });
    it('consumes string length of chars from input', function() {
        /*
            will pass - it checks just string.length; doesnt care what the str contains
         */
        var template = new Template('1234567890', {});
        template.consume('abcd');
        assert.equal(template.input, '567890');
    });
  });
});
