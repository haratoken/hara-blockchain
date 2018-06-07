var Web3 = require('web3');
// var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

// var userAccount = web3.eth.accounts[0]
// console.log(web3.eth.getBalance(userAccount))
// var d = web3.eth.abi.decodeParameters(['address', 'string'], '0x0000000000000000000000003eee067d8c4ff2d58da29a930c02383b2ef225c30000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000668656c706d650000000000000000000000000000000000000000000000000000')
// console.log(d['0'])
/* 
function Eth(httpProvider) { 
    this.web3 = new Web3(new Web3.providers.HttpProvider(httpProvider));
    this.abi = this.web3.eth.abi
};
// Baz.prototype.bar = function() { console.trace(); };
Eth.prototype.decode_abi = function(types, data) {
    var decodeResult = this.abi.decodeParameters(types, data);
    // console.log(decodeResult);
    return decodeResult;
    // return this.abi;
};
*/
/**/
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