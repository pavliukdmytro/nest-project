"use strict";
exports.__esModule = true;
var store_1 = require("@/store");
function useModal() {
    var show = function (payload) {
        store_1["default"].commit('global/modalShow', payload);
    };
    var hide = function () {
        store_1["default"].commit('global/modalHide');
    };
    return {
        show: show,
        hide: hide
    };
}
exports["default"] = useModal;
