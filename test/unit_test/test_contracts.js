var assert = require('assert');
const Eth = require('../../lib/utils.js');
const eth = new Eth(process.env.DEVELOPMENT_PROVIDER);

describe('Eth', function() {
  describe('encode decode values', function() {
    it('should generate abi encoded parameters from string words "testing"', function() {
      var keys = eth.raw_encode(['string'], ['testing']);
      assert.equal(keys, '0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000774657374696e6700000000000000000000000000000000000000000000000000');
    });
    it('should get "testing" string from abi encoded parameters', function() {
      var keys = eth.raw_decode(['string'], '0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000774657374696e6700000000000000000000000000000000000000000000000000');
      assert.equal(keys[0], "testing");
    });
  });
});