var assert = require('assert');
const Encryption = require('../../lib/encryption.js');

describe('Encryption', function() {
  let shares;
  let encrypt;
  beforeEach(async() => {
    encrypt = new Encryption()
  });
  describe('Shamir Secret Sharing Schema', async() =>  {
    it('should share shamir keys', async() => {
      var words = await "this is test";
      shares = await encrypt.generate_shamirsss(words, 5, 10);
      assert.equal(shares.length, 10);
    });
    it('combine keys to produce "this is test"', async() => {
      var words = await encrypt.combine_shamirsss(shares.slice(1,6));
      assert.equal(words, "this is test");
    });
  });
});

