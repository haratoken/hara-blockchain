var assert = require('assert');
const Encryption = require('../../lib/encryption.js');

describe('Encryption', function() {
  let shares;
  let encrypt;
  beforeEach(function(){
    encrypt = new Encryption()
  });
  describe('Shamir Secret Sharing Schema', function() {
    it('should share shamir keys', function() {
      var words = "this is test";
      shares = encrypt.generate_shamirsss(words, 5, 10);
      assert.equal(shares.lengths, 10);
    });
    it('combine keys to produce "this is test"', function() {
      var words = encrypt.combine_shamirsss(shares.slice(1,6));
      assert.equal(words, "this is test");
    });
  });
});

