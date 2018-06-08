var Web3 = require('web3');

class Eth{
    constructor(httpProvider){
        this.web3 = new Web3(new Web3.providers.HttpProvider(httpProvider));
        this.abi = this.web3.eth.abi
    }
    raw_decode(types, data){
        return this.abi.decodeParameters(types, data);
    }
    raw_encode(types, values){
        return this.abi.encodeParameters(types, values);
    }
}

module.exports = Eth;