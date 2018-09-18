import Axios from "axios";
import { getBalanceMock, getBlockMock, getDetailTransactionMock, getTransactionsMock, getTotalTransaction } from "./mock_data";

export default class HaraTokenSDK {
  constructor(NEED_MOCK) {
    this.endpoint = process.env.WEBPACK_ENV
      ? "http://scan.haratoken.app"
      : "http://192.168.99.100:3000";

    this.is_mock = NEED_MOCK;

    Axios.defaults.validateStatus = function(status) {
      return status >= 200 && status <= 401; // default
    };
  }

  _getUserBalance = async address => {
    if(this.is_mock) return getBalanceMock;

    let _result = await Axios.get(this.endpoint + "/get_alias_functions", {
      params: {
        function: "getBalance",
        params: JSON.stringify([address])
      }
    });

    return _result.data;
  };

  _getBlocks = async (page = 0, limit = 10) => {
    if(this.is_mock) return getBlockMock;

    let _result = await Axios.get(this.endpoint + "/get_blocks", {
      params: {
        page: page,
        limit: limit
      }
    });

    return _result.data;
  };

  _getDetailTransaction = async (txhash) => {
    if(this.is_mock) return getDetailTransactionMock;

    let _result = await Axios.get(this.endpoint + "/get_detail_transaction", {
      params: {
        txhash: txhash
      }
    });

    return _result.data;
  };

  _getTransactions = async (page, limit) => {
    if(this.is_mock) return getTransactionsMock;

    let _result = await Axios.get(this.endpoint + "/get_transactions", {
      params: {
        page: page,
        limit: limit
      }
    });

    return _result.data;
  };

  _getTransactionsByAddress = async (page, limit, from, to) => {
    if(this.is_mock) return getTransactionsMock;

    let _result = await Axios.get(this.endpoint + "/get_transactions_by_address", {
      params: {
        page: page,
        limit: limit,
        from,
        to
      }
    });

    return _result.data;
  };

  _getTotalTransaction = async (page, limit, from, to) => {
    if(this.is_mock) return getTotalTransaction;

    let _result = await Axios.get(this.endpoint + "/get_total_transaction");

    return _result.data;
  };


  _call = async (functionName, params) => {
    if(this.is_mock) return getTransactionsMock;

    let _result = await Axios.get(this.endpoint + "/get_alias_functions", {
      params: {
        function: functionName,
        params: JSON.stringify(params)
      }
    });

    return _result.data;
  }
}
