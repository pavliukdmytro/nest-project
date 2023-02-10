"use strict";
exports.__esModule = true;
var store_1 = require("../../store");
var Store = /** @class */ (function () {
    function Store() {
    }
    /* eslint-disable @typescript-eslint/no-explicit-any */
    Store.prototype.commit = function (name, payload) {
        store_1["default"].commit(name, payload);
    };
    return Store;
}());
exports["default"] = new Store();
