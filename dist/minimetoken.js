"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _async = require("async");

var _async2 = _interopRequireDefault(_async);

var _bignumber = require("bignumber.js");

var _bignumber2 = _interopRequireDefault(_bignumber);

var _runethtx = require("runethtx");

var _MiniMeTokenSol = require("../contracts/MiniMeToken.sol.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MiniMeToken = function () {
    function MiniMeToken(web3, address) {
        _classCallCheck(this, MiniMeToken);

        this.web3 = web3;
        this.contract = this.web3.eth.contract(_MiniMeTokenSol.MiniMeTokenAbi).at(address);
    }

    _createClass(MiniMeToken, [{
        key: "getState",
        value: function getState(cb) {
            var _this = this;

            var promise = new Promise(function (resolve, reject) {
                var st = {
                    balances: {}
                };
                var accounts = void 0;
                _async2.default.series([function (cb1) {
                    _this.contract.name(function (err, _name) {
                        if (err) {
                            cb1(err);return;
                        }
                        st.name = _name;
                        cb1();
                    });
                }, function (cb1) {
                    _this.contract.decimals(function (err, _decimals) {
                        if (err) {
                            cb1(err);return;
                        }
                        st.decimals = _decimals;
                        cb1();
                    });
                }, function (cb1) {
                    _this.web3.eth.getAccounts(function (err, _accounts) {
                        if (err) {
                            cb1(err);return;
                        }
                        accounts = _accounts;
                        cb1();
                    });
                }, function (cb1) {
                    _this.contract.totalSupply(function (err, _totalSupply) {
                        if (err) {
                            cb1(err);return;
                        }
                        st.totalSupply = _totalSupply.div(new _bignumber2.default(10).pow(st.decimals)).toNumber();
                        cb1();
                    });
                }, function (cb1) {
                    _this.contract.parentToken(function (err, _parentToken) {
                        if (err) {
                            cb1(err);return;
                        }
                        st.parentToken = _parentToken;
                        cb1();
                    });
                }, function (cb1) {
                    _this.contract.parentSnapShotBlock(function (err, _parentSnapShotBlock) {
                        if (err) {
                            cb1(err);return;
                        }
                        st.parentSnapShotBlock = _parentSnapShotBlock;
                        cb1();
                    });
                }, function (cb1) {
                    _async2.default.eachSeries(accounts, function (account, cb2) {
                        _this.contract.balanceOf(account, function (err, res) {
                            if (err) {
                                cb2(err);return;
                            }
                            st.balances[account] = res.div(new _bignumber2.default(10).pow(st.decimals)).toNumber();
                            cb2();
                        });
                    }, cb1);
                }], function (err2) {
                    if (err2) {
                        reject(err2);
                    } else {
                        resolve(st);
                    }
                });
            });

            if (cb) {
                promise.then(function (value) {
                    cb(null, value);
                }, function (reason) {
                    cb(reason);
                });
            } else {
                return promise;
            }
        }
    }, {
        key: "createCloneToken",
        value: function createCloneToken(opts, cb) {
            var _this2 = this;

            var params = Object.assign({}, opts, {
                contract: this.contract,
                method: "createCloneToken",
                extraGas: 5000
            });
            var promise = new Promise(function (resolve, reject) {
                (0, _runethtx.send)(params, function (err2, txHash) {
                    if (err2) {
                        reject(err2);
                        return;
                    }
                    _this2.web3.eth.getTransactionReceipt(txHash, function (err3, res) {
                        if (err3) {
                            reject(err3);
                            return;
                        }
                        var cloneTokenAddr = _this2.web3.toBigNumber(res.logs[0].topics[1]).toString(16);
                        while (cloneTokenAddr.length < 40) {
                            cloneTokenAddr = "0" + cloneTokenAddr;
                        }cloneTokenAddr = "0x" + cloneTokenAddr;
                        var miniMeTokenClone = new MiniMeToken(_this2.web3, cloneTokenAddr);
                        resolve(miniMeTokenClone);
                    });
                });
            });

            if (cb) {
                promise.then(function (value) {
                    cb(null, value);
                }, function (reason) {
                    cb(reason);
                });
            } else {
                return promise;
            }
        }
    }, {
        key: "convertAmountAndSend",
        value: function convertAmountAndSend(method, opts, cb) {
            var _this3 = this;

            var promise = new Promise(function (resolve, reject) {
                var params = Object.assign({}, opts, {
                    contract: _this3.contract,
                    method: method
                });
                _this3.contract.decimals(function (err, _decimals) {
                    if (err) {
                        reject(err);
                        return;
                    }
                    params.amount = new _bignumber2.default(10).pow(_decimals).mul(params.amount);
                    (0, _runethtx.send)(params, function (err2, txHash) {
                        if (err2) {
                            reject(err2);
                            return;
                        }
                        resolve(txHash);
                    });
                });
            });

            if (cb) {
                promise.then(function (value) {
                    cb(null, value);
                }, function (reason) {
                    cb(reason);
                });
            } else {
                return promise;
            }
        }
    }, {
        key: "transfer",
        value: function transfer(opts, cb) {
            return this.convertAmountAndSend("transfer", opts, cb);
        }
    }, {
        key: "generateTokens",
        value: function generateTokens(opts, cb) {
            return this.convertAmountAndSend("generateTokens", opts, cb);
        }
    }, {
        key: "destroyTokens",
        value: function destroyTokens(opts, cb) {
            var params = Object.assign({}, opts);
            params.extraGas = 50000;
            return this.convertAmountAndSend("destroyTokens", params, cb);
        }
    }, {
        key: "approve",
        value: function approve(opts, cb) {
            return this.convertAmountAndSend("approve", opts, cb);
        }
    }, {
        key: "allowance",
        value: function allowance(opts, cb) {
            var _this4 = this;

            var promise = new Promise(function (resolve, reject) {
                var decimals = void 0;
                var allowance = void 0;
                _async2.default.series([function (cb1) {
                    _this4.contract.decimals(function (err, _decimals) {
                        if (err) {
                            cb1(err);
                            return;
                        }
                        decimals = _decimals;
                        cb1();
                    });
                }, function (cb1) {
                    _this4.contract.allowance(opts.owner, opts.spender, function (err, res) {
                        if (err) {
                            cb1(err);
                            return;
                        }
                        allowance = res.div(new _bignumber2.default(10).pow(decimals)).toNumber();
                        cb1();
                    });
                }], function (err2) {
                    if (err2) {
                        reject(err2);
                    } else {
                        resolve(allowance);
                    }
                });
            });

            if (cb) {
                promise.then(function (value) {
                    cb(null, value);
                }, function (reason) {
                    cb(reason);
                });
            } else {
                return promise;
            }
        }
    }], [{
        key: "deploy",
        value: function deploy(web3, opts, cb) {
            var params = Object.assign({}, opts);
            params.parentToken = params.parentToken || 0;
            params.parentSnapShotBlock = params.parentSnapShotBlock || 0;
            params.transfersEnabled = typeof params.transfersEnabled === "undefined" ? true : params.transfersEnabled;

            _async2.default.series([function (cb1) {
                params.abi = _MiniMeTokenSol.MiniMeTokenFactoryAbi;
                params.byteCode = _MiniMeTokenSol.MiniMeTokenFactoryByteCode;
                (0, _runethtx.deploy)(web3, params, function (err, _tokenFactory) {
                    if (err) {
                        cb1(err);
                        return;
                    }
                    params.tokenFactory = _tokenFactory.address;
                    cb1();
                });
            }, function (cb1) {
                params.abi = _MiniMeTokenSol.MiniMeTokenAbi;
                params.byteCode = _MiniMeTokenSol.MiniMeTokenByteCode;
                (0, _runethtx.deploy)(web3, params, cb1);
            }], function (err, res) {
                if (err) return cb(err);
                var minime = new MiniMeToken(web3, res[1].address);
                cb(null, minime);
            });
        }
    }]);

    return MiniMeToken;
}();

exports.default = MiniMeToken;
module.exports = exports["default"];
