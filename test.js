let HaraTokenSDK = require("./lib/library").default;

let HartSDK = new HaraTokenSDK(true);

/**
 * this function get user balance
 * @param {string} # (user address)
 */
let getBalance = HartSDK._getUserBalance(
  "0x2A4FEB48B3bC241C4bD3b7A9B420683deB572A58"
);

getBalance.then(function(res) {
  //   console.log(res);
});

/**
 * this function get Block list
 * @param {int, int} # (page, limit)
 */
let getBlocks = HartSDK._getBlocks(1, 10);

getBlocks.then(function(res) {
  //   console.log(res);
});

/**
 * this function get Transaction list
 * @param {int, int} # (page, limit)
 */
let getTransactions = HartSDK._getTransactions(1, 10);

getTransactions.then(function(res) {
  //   console.log(res);
});

/**
 * this function get Transaction list
 * @param {string} # (transaction hash)
 */
let getDetailTransaction = HartSDK._getDetailTransaction(
  "0x79092a8f99a822def6589e5bf294f0387cfdaad4ec41cc910c8055acd7e2e348"
);

getDetailTransaction.then(function(res) {
  // console.log(res);
});

/**
 * this function will call all web3 functions manually, by proxy command that alias on backend url
 * @param {string} # (transaction hash)
 */
let getCall = HartSDK._call("getTransaction", [
  "0xfae265d344bb13ecd6f3d4456f10275c642fe74fbbee7e4919ad2f0a506b54a4"
]);

getCall.then(function(res) {
  // console.log(res);
});

/**
 * this function will call all web3 functions manually, by proxy command that alias on backend url
 * @param {string} # (transaction hash)
 */
let _getBalance = HartSDK._call("getBalance", [
  "0x2A4FEB48B3bC241C4bD3b7A9B420683deB572A58"
]);

_getBalance.then(function(res) {
  // console.log(res);
});

/**
 * get latest block from privatenet
 */
let getLatestBlock = HartSDK._call("getBlock", ["latest"]);

getLatestBlock.then(function(res) {
  // console.log(res);
});

/**
 * get total transaction
 */
let getTotalTransaction = HartSDK._getTotalTransaction();

getTotalTransaction.then(function(res) {
  console.log("total transaction", res);
})

