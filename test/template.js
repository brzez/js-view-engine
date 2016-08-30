import {assert} from 'chai';

import Template from '../src/template'

describe('template', () => {
  describe('.input', function() {
    it('stores input', function() {
        var template = new Template('banana', {});
        assert.equal(template.input, 'banana');
    });
  });
  
  describe('.get', function() {
    it('returns data value via dot separated path', function() {
        var template = new Template('banana', {foo: {bar: {baz: 123}}});
        assert.equal(template.get('foo.bar.baz'), 123);
    });
  });

  describe('.render', function() {
    it('renders all from output array', function() {
        var template = new Template();
        template.output.push(
        {
          render: function() {
            return '123';
          }
        },
        {
          render: function() {
            return '456';
          }
        }
        );
        assert.equal(template.render(), '123456');
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
