var secrets = require('secrets.js-grempe');

class Encryption{
    generate_shamirsss(secret_words, require_keys, share_keys){
        var hexstr = secrets.str2hex(secret_words)
        return secrets.share(hexstr, share_keys, require_keys);
    }
    combine_shamirsss(keys){
        var words = secrets.combine(keys);
        return secrets.hex2str(words)
    }
}

module.exports = Encryption;