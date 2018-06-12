var assert = require('assert');
const Encryption = require('../../lib/encryption.js');

describe('Encryption', function() {
  describe('Shamir Secret Sharing Schema', function() {
    it('should share shamir keys', function() {
      var words = "this is test";
      var shares = secrets.share(key, 10, 5);
      assert.equal(shares.lengts, 10);
    });
    it('combine keys to produce "this is test"', function() {
      var words = secrets.combine(shares.slice(1,5));
      assert.equal(keys[0], "testing");
    });
  });
});

